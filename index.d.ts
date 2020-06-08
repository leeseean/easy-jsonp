/**

 * @author qiuzhengchen

 * @date 2020/6/8 11:28

 */
export declare interface Options {
    url: string,
    params?: any,
    timeout?: number
}

export declare function jsonp(options: Options): Promise<any>

declare module "easy-jsonp" {
    export = jsonp
}
/*declare module 'easy-jsonp' {

    // 添加插件中t添加的函数，类型
    // 注意，还可以使用unexport删除核心库中已经导出的名字

    // 插件中的函数
    export function jsonp(options: Options): Promise<any>

    // 插件中的类型
    export interface Options {
        url: string,
        params?: any,
        timeout?: number
    }
}*/
