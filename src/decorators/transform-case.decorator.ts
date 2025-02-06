import { Transform } from 'class-transformer';
import { CaseTransformer } from '../transformers/case.transformer';
import { CaseOptions } from '../interfaces/case-options.interface';

export const TransformCase = (options?: CaseOptions) => {
    return Transform(({ value }) => {
        if (!value) return value;
        return CaseTransformer.transform(value, options);
    });
};
