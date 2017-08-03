import { Compiler, NgModuleFactory, NgModuleFactoryLoader, SystemJsNgModuleLoader } from "@angular/core";
export declare class NSModuleFactoryLoader implements NgModuleFactoryLoader {
    private compiler;
    private ngModuleLoader;
    private offlineMode;
    constructor(compiler: Compiler, ngModuleLoader: SystemJsNgModuleLoader);
    load(path: string): Promise<NgModuleFactory<any>>;
    private loadAndCompile(path);
}
