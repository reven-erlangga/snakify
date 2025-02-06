import { CaseOptions } from "src/interfaces/case-options.interface";

export class CaseConverter {
    static snakeToCamel(str: string): string {
        return str.replace(/([-_][a-z])/g, (group) =>
            group.toUpperCase().replace('-', '').replace('_', '')
        );
    }

    static camelToSnake(str: string): string {
        return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    }

    static transformObject(obj: any, options: CaseOptions = {}): any {
        if (!obj || typeof obj !== 'object') {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(item => this.transformObject(item, options));
        }

        const transformed = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const camelKey = this.snakeToCamel(key);

                if (options.excludePaths?.includes(key)) {
                    transformed[camelKey] = obj[key];
                    continue;
                }

                transformed[camelKey] = options.recursive
                    ? this.transformObject(obj[key], options)
                    : obj[key];
            }
        }

        return transformed;
    }
}
