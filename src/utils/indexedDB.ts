
export default class DB {
  private dbName: string;  // 数据库名称
  private db: any; // 定义数据库对象
  constructor(dbName: string) {
    this.dbName = dbName
  }
  public openStore(storeName: string, keyPath: string) {
    const request = window.indexedDB.open(this.dbName, 1)
    request.onsuccess = (event: any) => {
      this.db = event.target.result;
      console.log("数据库打开成功");
      console.log("event2", event);
    }
    request.onerror = (event) => {
      console.log("数据库打开失败");
    }
    request.onupgradeneeded = (event:any) => {
      console.log("数据库升级成功");
      this.db = event.target.result;
      const { result }: any = event.target
      //创建对象仓库
      const store = result.createObjectStore(storeName, { autoIncrement: true, keyPath })
      //创建这个对象仓库成功的回调
      store.transaction.oncomplete =(event: any) => {
        console.log("创建对象仓库成功");
        
      }
    }
  }

  // 新增或者修改数据库数据
  public updateItem(storeName: string, data: any){
    const store = this.db.transaction([storeName],'readwrite').objectStore(storeName);
    const request = store.put({
      ...data,
      updateTime:new Date().getTime()
    });
    request.onsuccess = (event: any) => {
      console.log("数据写入成功");
      console.log("event222", event);
    }
    request.onerror = (event:any) => {
      console.log("数据写入失败");
    }
  }

  // 数据库删除数据
  public deleteItem(storeName: string, key: number | string){
    const store = this.db.transaction([storeName],'readwrite').objectStore(storeName);
    const request = store.delete(key);
    request.onsuccess = (event: any) => {
      console.log("数据删除成功");
    }
    request.onerror = (event:any) => {
      console.log("数据删除失败");
    }
  }

  // 查询所有的数据
  public getItemList(storeName: string){
    const store = this.db.transaction([storeName]).objectStore(storeName);
    const request = store.getAll();
    request.onsuccess = (event: any) => {
      console.log("数据获取全部成功");
      console.log(event.target.result);
    }
    request.onerror = (event:any) => {
      console.log("数据获取全部失败");
    }
  }

    // 查询某一条的数据
    public getItemOne(storeName: string, key: number | string){
      const store = this.db.transaction([storeName]).objectStore(storeName);
      const request = store.get(key);
      request.onsuccess = (event: any) => {
        console.log("查询这条数据成功");
        console.log(event.target.result);
      }
      request.onerror = (event:any) => {
        console.log("查询这条数据失败");
      }
    }
}