export class ApiResponse{
    isSuccessful!: boolean;
    messange!: string;
}

export class ApiCollectionResponse extends ApiResponse{
    data!:Array<any>;
}