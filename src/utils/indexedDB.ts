
export default class DB {
  private dbName: string;  // 数据库名称
  constructor(dbName: string) {
    this.dbName = dbName
  }
  public openStore(storeName: string, keyPath: string) {
    const request = window.indexedDB.open(this.dbName, 1)
    request.onsuccess = (event) => {
      console.log("数据库打开成功");
      console.log("event2", event);
    }
    request.onerror = (event) => {
      console.log("数据库打开失败");
    }
    request.onupgradeneeded = (event) => {
      console.log("数据库升级成功");
      const { result }: any = event.target
      //创建对象仓库
      const store = result.createObjectStore(storeName, { autoIncrement: true, keyPath })
      //创建这个对象仓库成功的回调
      store.transaction.oncomplete =(event: any) => {
        console.log("创建对象仓库成功");
        
      }
    }
  }
}