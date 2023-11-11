
export class GenericResult
{
    public Succeeded: boolean;
    public Status: RRStatus | null | undefined;
    public Message: string;
    public Item: any;
    public TotalCount: number;
    constructor() {
        this.Item = null;
        this.Message = '';
        this.Succeeded = false;
        this.TotalCount = 0;
    }

    convertToGenericResult(Result: any): GenericResult{
      this.Succeeded = Result.succeeded
      this.Status = Result.status
      this.Message = Result.message
      this.Item = Result.Item
      this.TotalCount = Result.totalCount
      return this
    }
}

export enum RRStatus {
    Error = 0,
    Ok = 1,
    Warning = 2
}