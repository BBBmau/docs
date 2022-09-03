---
title: Go
sidebar_position: 3
displayed_sidebar: motorSidebar
---

```
    ### 🚧 Under Construction 🚧
```

## motor-go API

For more documentation on the motor-go implementation, please refer to its [GoDoc](https://pkg.go.dev/github.com/sonr-io/sonr/bind/motor-mobile).

The following interface is the underlying node used by the **Motor SDK** ([_Android_](https://github.com/sonr-io/motor-android), [_Flutter_](https://github.com/sonr-io/motor-flutter), [_Swift_](https://github.com/sonr-io/MotorKit)). It is not intended to be used directly.

```go
type MotorNode interface {
    // Account
    GetAddress() string
    GetBalance() int64
    GetClient() *client.Client
    GetWallet() *mpc.Wallet
    GetPubKey() *secp256k1.PubKey
    SendTokens(req mt.PaymentRequest) (*mt.PaymentResponse, error)

    // Networking
    Connect() error
    GetDeviceID() string
    GetHost() host.SonrHost

    // Registry
    AddCredentialVerificationMethod(id string, cred *did.Credential) error
    CreateAccount(mt.CreateAccountRequest) (mt.CreateAccountResponse, error)
    GetDID() did.DID
    GetDIDDocument() did.Document
    Login(mt.LoginRequest) (mt.LoginResponse, error)

    // Schema
    CreateSchema(mt.CreateSchemaRequest) (mt.CreateSchemaResponse, error)
    NewObjectBuilder(schemaDid string) (*object.ObjectBuilder, error)

    // Buckets

    /*
      Creates a new bucket with the defined properties in the request.
      Returns and instance of bucket. before returning both content and buckets are resolved.
    */
    CreateBucket(context.Context, mt.CreateBucketRequest) (bucket.Bucket, error)

    GetBucket(did string) (bucket.Bucket, error)

    GetBuckets(ctx context.Context) ([]bucket.Bucket, error)
    /*
      Updates a pre existing Bucket's label. before calling update the bucket must already be resolved using GetBucket
    */
    UpdateBucketLabel(context context.Context, did string, label string) (bucket.Bucket, error)

    /*
      Updates a pre existing Bucket's visibility. Before calling update the bucket must already be resolved using GetBucket.
      Note that changing a buckets visibility can cause issues for other applications using a previously public bucket.
    */
    UpdateBucketVisibility(context context.Context, did string, visibility bt.BucketVisibility) (bucket.Bucket, error)

    /*
      Updates a pre existing Bucket's BucketItems. Before calling update the bucket must already be resolved using GetBucket.
      Should be used for both adding and removing content. Once a buckets content is updated, content is updated to reflect the updated items.
    */
    UpdateBucketItems(context context.Context, did string, items []*bt.BucketItem) (bucket.Bucket, error)
    SearchBucketBySchema(req mt.SearchBucketContentBySchemaRequest) (mt.SearchBucketContentBySchemaResponse, error)

    // Query
    QueryWhoIs(req mt.QueryWhoIsRequest) (*mt.QueryWhoIsResponse, error)
    QueryWhatIs(req mt.QueryWhatIsRequest) (*mt.QueryWhatIsResponse, error)
    QueryWhatIsByCreator(req mt.QueryWhatIsByCreatorRequest) (*mt.QueryWhatIsByCreatorResponse, error)
    QueryWhatIsByDid(did string) (*mt.QueryWhatIsResponse, error)
    QueryWhereIs(req mt.QueryWhereIsRequest) (*mt.QueryWhereIsResponse, error)
    QueryWhereIsByCreator(req mt.QueryWhereIsByCreatorRequest) (*mt.QueryWhereIsByCreatorResponse, error)
    QueryObject(cid string) (map[string]interface{}, error)
}
```
