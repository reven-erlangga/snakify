import { CaseConverter } from '../utils/case-converter.util';
import { CaseOptions } from '../interfaces/case-options.interface';

export class CaseTransformer {
    static transform(value: any, options?: CaseOptions): any {
        return CaseConverter.transformObject(value, options);
    }
}
