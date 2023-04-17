// 可以配置的表单

import { RuleItem } from "./rule"

export interface FormOptions {
  type: 'cascader ' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'color-picker' | 'date-picker' | 'input' | 'radio' | 'radio-group' | 'radio-button' | 'rate' | 'select' | 'option' | 'slider' | 'switch' | 'time-picker' | 'time-select' | 'upload',
  // 表单项的标签
  label?: string,
  // 表单项的值
  value?: any,
  // 表单项的标识
  prop?: string,
  // 表单项的验证规则
  rules?: RuleItem[],
  // 表单项的初始值
  placeholder?: string,
  attrs?: {
    clearable?: boolean,
    showPassword?: boolean,
    validateOnRuleChange?: boolean
    style?: object
  }
  children?: FormOptions[],
}