/**

 * @author qiuzhengchen

 * @date 2020/6/8 11:28

 */

interface Options {
    url: string,
    params?: any,
    timeout?: number
}

declare module "easy-jsonp" {
    export default function jsonp(options: Options): Promise<any>
}
