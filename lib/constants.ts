import { Dispatch, SetStateAction } from "react";

export const S3_PREFIX = "https://art-distribution.s3.amazonaws.com";

export type SetState<T> = Dispatch<SetStateAction<T>>;
