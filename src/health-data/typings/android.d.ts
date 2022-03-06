declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class ItemListIntents {
						public static class: java.lang.Class<com.google.android.gms.actions.ItemListIntents>;
						public static ACTION_CREATE_ITEM_LIST: string;
						public static ACTION_DELETE_ITEM_LIST: string;
						public static ACTION_APPEND_ITEM_LIST: string;
						public static ACTION_ACCEPT_ITEM: string;
						public static ACTION_REJECT_ITEM: string;
						public static ACTION_DELETE_ITEM: string;
						public static EXTRA_LIST_NAME: string;
						public static EXTRA_LIST_QUERY: string;
						public static EXTRA_ITEM_NAME: string;
						public static EXTRA_ITEM_NAMES: string;
						public static EXTRA_ITEM_QUERY: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class NoteIntents {
						public static class: java.lang.Class<com.google.android.gms.actions.NoteIntents>;
						public static ACTION_CREATE_NOTE: string;
						public static ACTION_APPEND_NOTE: string;
						public static ACTION_DELETE_NOTE: string;
						public static EXTRA_NAME: string;
						public static EXTRA_TEXT: string;
						public static EXTRA_NOTE_QUERY: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class ReserveIntents {
						public static class: java.lang.Class<com.google.android.gms.actions.ReserveIntents>;
						public static ACTION_RESERVE_TAXI_RESERVATION: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class SearchIntents {
						public static class: java.lang.Class<com.google.android.gms.actions.SearchIntents>;
						public static ACTION_SEARCH: string;
						public static EXTRA_QUERY: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class AccountChangeEvent extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.auth.AccountChangeEvent>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.AccountChangeEvent>;
						public constructor();
						public constructor(param0: number, param1: string, param2: number, param3: number, param4: string);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAccountName(): string;
						public getChangeType(): number;
						public getChangeData(): string;
						public getEventIndex(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class AccountChangeEventsRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.auth.AccountChangeEventsRequest>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.AccountChangeEventsRequest>;
						public constructor();
						/** @deprecated */
						public getAccountName(): string;
						public getAccount(): globalAndroid.accounts.Account;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						/** @deprecated */
						public setAccountName(param0: string): com.google.android.gms.auth.AccountChangeEventsRequest;
						public setEventIndex(param0: number): com.google.android.gms.auth.AccountChangeEventsRequest;
						public getEventIndex(): number;
						public setAccount(param0: globalAndroid.accounts.Account): com.google.android.gms.auth.AccountChangeEventsRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class AccountChangeEventsResponse extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.auth.AccountChangeEventsResponse>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.AccountChangeEventsResponse>;
						public constructor();
						public getEvents(): java.util.List<com.google.android.gms.auth.AccountChangeEvent>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: java.util.List<com.google.android.gms.auth.AccountChangeEvent>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class CookieUtil {
						public static class: java.lang.Class<com.google.android.gms.auth.CookieUtil>;
						public static getCookieValue(param0: string, param1: string, param2: string, param3: string, param4: java.lang.Boolean, param5: java.lang.Boolean, param6: java.lang.Long): string;
						public static getCookieUrl(param0: string, param1: java.lang.Boolean): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class GoogleAuthException {
						public static class: java.lang.Class<com.google.android.gms.auth.GoogleAuthException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class GoogleAuthUtil extends com.google.android.gms.auth.zzd {
						public static class: java.lang.Class<com.google.android.gms.auth.GoogleAuthUtil>;
						public static GOOGLE_ACCOUNT_TYPE: string;
						public static WORK_ACCOUNT_TYPE: string;
						public static KEY_SUPPRESS_PROGRESS_SCREEN: string;
						public static CHANGE_TYPE_ACCOUNT_ADDED: number;
						public static CHANGE_TYPE_ACCOUNT_REMOVED: number;
						public static CHANGE_TYPE_ACCOUNT_RENAMED_FROM: number;
						public static CHANGE_TYPE_ACCOUNT_RENAMED_TO: number;
						/** @deprecated */
						public static getTokenWithNotification(param0: globalAndroid.content.Context, param1: string, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.content.Intent): string;
						public static clearToken(param0: globalAndroid.content.Context, param1: string): void;
						public static getAccountChangeEvents(param0: globalAndroid.content.Context, param1: number, param2: string): java.util.List<com.google.android.gms.auth.AccountChangeEvent>;
						public static getTokenWithNotification(param0: globalAndroid.content.Context, param1: globalAndroid.accounts.Account, param2: string, param3: globalAndroid.os.Bundle): string;
						public static getTokenWithNotification(param0: globalAndroid.content.Context, param1: globalAndroid.accounts.Account, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.content.Intent): string;
						/** @deprecated */
						public static invalidateToken(param0: globalAndroid.content.Context, param1: string): void;
						public static requestGoogleAccountsAccess(param0: globalAndroid.content.Context): java.lang.Boolean;
						/** @deprecated */
						public static getTokenWithNotification(param0: globalAndroid.content.Context, param1: string, param2: string, param3: globalAndroid.os.Bundle): string;
						public static getTokenWithNotification(param0: globalAndroid.content.Context, param1: globalAndroid.accounts.Account, param2: string, param3: globalAndroid.os.Bundle, param4: string, param5: globalAndroid.os.Bundle): string;
						public static getToken(param0: globalAndroid.content.Context, param1: globalAndroid.accounts.Account, param2: string): string;
						public static getAccountId(param0: globalAndroid.content.Context, param1: string): string;
						/** @deprecated */
						public static getToken(param0: globalAndroid.content.Context, param1: string, param2: string, param3: globalAndroid.os.Bundle): string;
						/** @deprecated */
						public static getToken(param0: globalAndroid.content.Context, param1: string, param2: string): string;
						/** @deprecated */
						public static getTokenWithNotification(param0: globalAndroid.content.Context, param1: string, param2: string, param3: globalAndroid.os.Bundle, param4: string, param5: globalAndroid.os.Bundle): string;
						public static getToken(param0: globalAndroid.content.Context, param1: globalAndroid.accounts.Account, param2: string, param3: globalAndroid.os.Bundle): string;
						public static removeAccount(param0: globalAndroid.content.Context, param1: globalAndroid.accounts.Account): globalAndroid.os.Bundle;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class GooglePlayServicesAvailabilityException extends com.google.android.gms.auth.UserRecoverableAuthException {
						public static class: java.lang.Class<com.google.android.gms.auth.GooglePlayServicesAvailabilityException>;
						public getConnectionStatusCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class TokenData extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
						public static class: java.lang.Class<com.google.android.gms.auth.TokenData>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.TokenData>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class UserRecoverableAuthException extends com.google.android.gms.auth.GoogleAuthException {
						public static class: java.lang.Class<com.google.android.gms.auth.UserRecoverableAuthException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public getIntent(): globalAndroid.content.Intent;
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: globalAndroid.content.Intent);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class UserRecoverableNotifiedException extends com.google.android.gms.auth.GoogleAuthException {
						public static class: java.lang.Class<com.google.android.gms.auth.UserRecoverableNotifiedException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module account {
						export class WorkAccount {
							public static class: java.lang.Class<com.google.android.gms.auth.account.WorkAccount>;
							public static WorkAccountApi: com.google.android.gms.auth.account.WorkAccountApi;
							public static getClient(param0: globalAndroid.app.Activity): com.google.android.gms.auth.account.WorkAccountClient;
							public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.auth.account.WorkAccountClient;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module account {
						export class WorkAccountApi {
							public static class: java.lang.Class<com.google.android.gms.auth.account.WorkAccountApi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.auth.account.WorkAccountApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setWorkAuthenticatorEnabled(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): void;
								setWorkAuthenticatorEnabledWithResult(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Result>;
								addWorkAccount(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.account.WorkAccountApi.AddAccountResult>;
								removeWorkAccount(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.accounts.Account): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Result>;
							});
							public constructor();
							/** @deprecated */
							public addWorkAccount(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.account.WorkAccountApi.AddAccountResult>;
							/** @deprecated */
							public removeWorkAccount(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.accounts.Account): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Result>;
							/** @deprecated */
							public setWorkAuthenticatorEnabledWithResult(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Result>;
							/** @deprecated */
							public setWorkAuthenticatorEnabled(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): void;
						}
						export module WorkAccountApi {
							export class AddAccountResult extends com.google.android.gms.common.api.Result {
								public static class: java.lang.Class<com.google.android.gms.auth.account.WorkAccountApi.AddAccountResult>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.account.WorkAccountApi$AddAccountResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getAccount(): globalAndroid.accounts.Account;
									getStatus(): com.google.android.gms.common.api.Status;
								});
								public constructor();
								public getAccount(): globalAndroid.accounts.Account;
								public getStatus(): com.google.android.gms.common.api.Status;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module account {
						export class WorkAccountClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.auth.account.WorkAccountClient>;
							public setWorkAuthenticatorEnabled(param0: boolean): com.google.android.gms.tasks.Task<java.lang.Void>;
							public removeWorkAccount(param0: globalAndroid.accounts.Account): com.google.android.gms.tasks.Task<java.lang.Void>;
							public addWorkAccount(param0: string): com.google.android.gms.tasks.Task<globalAndroid.accounts.Account>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export class Auth {
							public static class: java.lang.Class<com.google.android.gms.auth.api.Auth>;
							public static PROXY_API: com.google.android.gms.common.api.Api<com.google.android.gms.auth.api.AuthProxyOptions>;
							public static CREDENTIALS_API: com.google.android.gms.common.api.Api<com.google.android.gms.auth.api.Auth.AuthCredentialsOptions>;
							public static GOOGLE_SIGN_IN_API: com.google.android.gms.common.api.Api<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
							public static ProxyApi: com.google.android.gms.auth.api.proxy.ProxyApi;
							public static CredentialsApi: com.google.android.gms.auth.api.credentials.CredentialsApi;
							public static GoogleSignInApi: com.google.android.gms.auth.api.signin.GoogleSignInApi;
						}
						export module Auth {
							export class AuthCredentialsOptions extends com.google.android.gms.common.api.Api.ApiOptions.Optional {
								public static class: java.lang.Class<com.google.android.gms.auth.api.Auth.AuthCredentialsOptions>;
								public toBundle(): globalAndroid.os.Bundle;
								public constructor(param0: com.google.android.gms.auth.api.Auth.AuthCredentialsOptions.Builder);
							}
							export module AuthCredentialsOptions {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.Auth.AuthCredentialsOptions.Builder>;
									public constructor();
									public forceEnableSaveDialog(): com.google.android.gms.auth.api.Auth.AuthCredentialsOptions.Builder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export class AuthProxy {
							public static class: java.lang.Class<com.google.android.gms.auth.api.AuthProxy>;
							public static ProxyApi: com.google.android.gms.auth.api.proxy.ProxyApi;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export class AuthProxyOptions extends com.google.android.gms.common.api.Api.ApiOptions.Optional {
							public static class: java.lang.Class<com.google.android.gms.auth.api.AuthProxyOptions>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module accounttransfer {
							export class AccountTransfer {
								public static class: java.lang.Class<com.google.android.gms.auth.api.accounttransfer.AccountTransfer>;
								public static ACTION_START_ACCOUNT_EXPORT: string;
								public static ACTION_ACCOUNT_IMPORT_DATA_AVAILABLE: string;
								public static ACTION_ACCOUNT_EXPORT_DATA_AVAILABLE: string;
								public static KEY_EXTRA_ACCOUNT_TYPE: string;
								public static getAccountTransferClient(param0: globalAndroid.app.Activity): com.google.android.gms.auth.api.accounttransfer.AccountTransferClient;
								public static getAccountTransferClient(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.accounttransfer.AccountTransferClient;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module accounttransfer {
							export class AccountTransferClient extends java.lang.Object /* com.google.android.gms.common.api.GoogleApi<com.google.android.gms.auth.api.accounttransfer.zzn>*/ {
								public static class: java.lang.Class<com.google.android.gms.auth.api.accounttransfer.AccountTransferClient>;
								public retrieveData(param0: string): com.google.android.gms.tasks.Task<androidNative.Array<number>>;
								public notifyCompletion(param0: string, param1: number): com.google.android.gms.tasks.Task<java.lang.Void>;
								public sendData(param0: string, param1: androidNative.Array<number>): com.google.android.gms.tasks.Task<java.lang.Void>;
								public getDeviceMetaData(param0: string): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.accounttransfer.DeviceMetaData>;
								public showUserChallenge(param0: string, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module accounttransfer {
							export class AccountTransferException extends com.google.android.gms.common.api.ApiException {
								public static class: java.lang.Class<com.google.android.gms.auth.api.accounttransfer.AccountTransferException>;
								public constructor(param0: com.google.android.gms.common.api.Status);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module accounttransfer {
							export class AccountTransferStatusCodes extends com.google.android.gms.common.api.CommonStatusCodes {
								public static class: java.lang.Class<com.google.android.gms.auth.api.accounttransfer.AccountTransferStatusCodes>;
								public static NOT_ALLOWED_SECURITY: number;
								public static NO_DATA_AVAILABLE: number;
								public static INVALID_REQUEST: number;
								public static CHALLENGE_NOT_ALLOWED: number;
								public static SESSION_INACTIVE: number;
								public static getStatusCodeString(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module accounttransfer {
							export class AuthenticatorTransferCompletionStatus {
								public static class: java.lang.Class<com.google.android.gms.auth.api.accounttransfer.AuthenticatorTransferCompletionStatus>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.accounttransfer.AuthenticatorTransferCompletionStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static COMPLETED_SUCCESS: number;
								public static COMPLETED_FAILURE: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module accounttransfer {
							export class DeviceMetaData extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.accounttransfer.DeviceMetaData>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.accounttransfer.DeviceMetaData>;
								public isChallengeAllowed(): boolean;
								public isLockScreenSolved(): boolean;
								public getMinAgeOfLockScreen(): number;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class Credential extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.Credential>;
								public static EXTRA_KEY: string;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.Credential>;
								public getProfilePictureUri(): globalAndroid.net.Uri;
								public getAccountType(): string;
								public getName(): string;
								public getGivenName(): string;
								public getPassword(): string;
								public equals(param0: any): boolean;
								public getFamilyName(): string;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getId(): string;
								public hashCode(): number;
								public getIdTokens(): java.util.List<com.google.android.gms.auth.api.credentials.IdToken>;
							}
							export module Credential {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.Credential.Builder>;
									public constructor(param0: string);
									public setProfilePictureUri(param0: globalAndroid.net.Uri): com.google.android.gms.auth.api.credentials.Credential.Builder;
									public constructor(param0: com.google.android.gms.auth.api.credentials.Credential);
									public build(): com.google.android.gms.auth.api.credentials.Credential;
									public setName(param0: string): com.google.android.gms.auth.api.credentials.Credential.Builder;
									public setPassword(param0: string): com.google.android.gms.auth.api.credentials.Credential.Builder;
									public setAccountType(param0: string): com.google.android.gms.auth.api.credentials.Credential.Builder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialPickerConfig extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialPickerConfig>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.CredentialPickerConfig>;
								/** @deprecated */
								public isForNewAccount(): boolean;
								public shouldShowAddAccountButton(): boolean;
								public shouldShowCancelButton(): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
							export module CredentialPickerConfig {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialPickerConfig.Builder>;
									public constructor();
									public setShowAddAccountButton(param0: boolean): com.google.android.gms.auth.api.credentials.CredentialPickerConfig.Builder;
									public setPrompt(param0: number): com.google.android.gms.auth.api.credentials.CredentialPickerConfig.Builder;
									public build(): com.google.android.gms.auth.api.credentials.CredentialPickerConfig;
									/** @deprecated */
									public setForNewAccount(param0: boolean): com.google.android.gms.auth.api.credentials.CredentialPickerConfig.Builder;
									public setShowCancelButton(param0: boolean): com.google.android.gms.auth.api.credentials.CredentialPickerConfig.Builder;
								}
								export class Prompt {
									public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialPickerConfig.Prompt>;
									/**
									 * Constructs a new instance of the com.google.android.gms.auth.api.credentials.CredentialPickerConfig$Prompt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
									public static SIGN_UP: number;
									public static CONTINUE: number;
									public static SIGN_IN: number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialRequest>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.CredentialRequest>;
								public getServerClientId(): string;
								public isPasswordLoginSupported(): boolean;
								public getIdTokenNonce(): string;
								public getCredentialPickerConfig(): com.google.android.gms.auth.api.credentials.CredentialPickerConfig;
								public getCredentialHintPickerConfig(): com.google.android.gms.auth.api.credentials.CredentialPickerConfig;
								/** @deprecated */
								public getSupportsPasswordLogin(): boolean;
								public isIdTokenRequested(): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getAccountTypesSet(): java.util.Set<string>;
								public getAccountTypes(): androidNative.Array<string>;
							}
							export module CredentialRequest {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialRequest.Builder>;
									/** @deprecated */
									public setSupportsPasswordLogin(param0: boolean): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public setIdTokenRequested(param0: boolean): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public setIdTokenNonce(param0: string): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public constructor();
									public setCredentialHintPickerConfig(param0: com.google.android.gms.auth.api.credentials.CredentialPickerConfig): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public setAccountTypes(param0: androidNative.Array<string>): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public setPasswordLoginSupported(param0: boolean): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public build(): com.google.android.gms.auth.api.credentials.CredentialRequest;
									public setServerClientId(param0: string): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public setCredentialPickerConfig(param0: com.google.android.gms.auth.api.credentials.CredentialPickerConfig): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialRequestResponse extends com.google.android.gms.common.api.Response<com.google.android.gms.auth.api.credentials.CredentialRequestResult> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialRequestResponse>;
								public constructor(param0: any);
								public getCredential(): com.google.android.gms.auth.api.credentials.Credential;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialRequestResult extends com.google.android.gms.common.api.Result {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialRequestResult>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.credentials.CredentialRequestResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCredential(): com.google.android.gms.auth.api.credentials.Credential;
									getStatus(): com.google.android.gms.common.api.Status;
								});
								public constructor();
								public getCredential(): com.google.android.gms.auth.api.credentials.Credential;
								public getStatus(): com.google.android.gms.common.api.Status;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class Credentials {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.Credentials>;
								public static getClient(param0: globalAndroid.app.Activity): com.google.android.gms.auth.api.credentials.CredentialsClient;
								public static getClient(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.credentials.CredentialsOptions): com.google.android.gms.auth.api.credentials.CredentialsClient;
								public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.credentials.CredentialsClient;
								public static getClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.credentials.CredentialsOptions): com.google.android.gms.auth.api.credentials.CredentialsClient;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialsApi {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialsApi>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.credentials.CredentialsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									request(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.CredentialRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.api.credentials.CredentialRequestResult>;
									getHintPickerIntent(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.HintRequest): globalAndroid.app.PendingIntent;
									save(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
									delete(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
									disableAutoSignIn(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								});
								public constructor();
								public static ACTIVITY_RESULT_ADD_ACCOUNT: number;
								public static ACTIVITY_RESULT_OTHER_ACCOUNT: number;
								public static ACTIVITY_RESULT_NO_HINTS_AVAILABLE: number;
								public static CREDENTIAL_PICKER_REQUEST_CODE: number;
								public getHintPickerIntent(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.HintRequest): globalAndroid.app.PendingIntent;
								public request(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.CredentialRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.api.credentials.CredentialRequestResult>;
								public save(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public disableAutoSignIn(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public delete(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialsClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.auth.api.Auth.AuthCredentialsOptions> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialsClient>;
								public disableAutoSignIn(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public request(param0: com.google.android.gms.auth.api.credentials.CredentialRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.credentials.CredentialRequestResponse>;
								public save(param0: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.tasks.Task<java.lang.Void>;
								public delete(param0: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.tasks.Task<java.lang.Void>;
								public getHintPickerIntent(param0: com.google.android.gms.auth.api.credentials.HintRequest): globalAndroid.app.PendingIntent;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialsOptions extends com.google.android.gms.auth.api.Auth.AuthCredentialsOptions {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialsOptions>;
								public static DEFAULT: com.google.android.gms.auth.api.credentials.CredentialsOptions;
							}
							export module CredentialsOptions {
								export class Builder extends com.google.android.gms.auth.api.Auth.AuthCredentialsOptions.Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialsOptions.Builder>;
									public constructor();
									public forceEnableSaveDialog(): com.google.android.gms.auth.api.Auth.AuthCredentialsOptions.Builder;
									public forceEnableSaveDialog(): com.google.android.gms.auth.api.credentials.CredentialsOptions.Builder;
									public build(): com.google.android.gms.auth.api.credentials.CredentialsOptions;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class HintRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.HintRequest>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.HintRequest>;
								public getServerClientId(): string;
								public getHintPickerConfig(): com.google.android.gms.auth.api.credentials.CredentialPickerConfig;
								public getIdTokenNonce(): string;
								public isIdTokenRequested(): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getAccountTypes(): androidNative.Array<string>;
								public isEmailAddressIdentifierSupported(): boolean;
							}
							export module HintRequest {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.HintRequest.Builder>;
									public constructor();
									public setPhoneNumberIdentifierSupported(param0: boolean): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public setHintPickerConfig(param0: com.google.android.gms.auth.api.credentials.CredentialPickerConfig): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public setIdTokenRequested(param0: boolean): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public setIdTokenNonce(param0: string): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public setServerClientId(param0: string): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public setAccountTypes(param0: androidNative.Array<string>): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public setEmailAddressIdentifierSupported(param0: boolean): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public build(): com.google.android.gms.auth.api.credentials.HintRequest;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class IdToken extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.IdToken>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.IdToken>;
								public getAccountType(): string;
								public constructor(param0: string, param1: string);
								public equals(param0: any): boolean;
								public getIdToken(): string;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class IdentityProviders {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.IdentityProviders>;
								public static FACEBOOK: string;
								public static GOOGLE: string;
								public static LINKEDIN: string;
								public static MICROSOFT: string;
								public static PAYPAL: string;
								public static TWITTER: string;
								public static YAHOO: string;
								public static getIdentityProviderForAccount(param0: globalAndroid.accounts.Account): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module phone {
							export class SmsRetriever {
								public static class: java.lang.Class<com.google.android.gms.auth.api.phone.SmsRetriever>;
								public static SMS_RETRIEVED_ACTION: string;
								public static EXTRA_SMS_MESSAGE: string;
								public static EXTRA_STATUS: string;
								public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.phone.SmsRetrieverClient;
								public static getClient(param0: globalAndroid.app.Activity): com.google.android.gms.auth.api.phone.SmsRetrieverClient;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module phone {
							export class SmsRetrieverApi {
								public static class: java.lang.Class<com.google.android.gms.auth.api.phone.SmsRetrieverApi>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.phone.SmsRetrieverApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									startSmsRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
								});
								public constructor();
								public startSmsRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module phone {
							export abstract class SmsRetrieverClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> implements com.google.android.gms.auth.api.phone.SmsRetrieverApi  {
								public static class: java.lang.Class<com.google.android.gms.auth.api.phone.SmsRetrieverClient>;
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								public constructor(param0: globalAndroid.app.Activity);
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
								/** @deprecated */
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public startSmsRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public constructor(param0: globalAndroid.content.Context);
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module proxy {
							export class AuthApiStatusCodes extends com.google.android.gms.common.api.CommonStatusCodes {
								public static class: java.lang.Class<com.google.android.gms.auth.api.proxy.AuthApiStatusCodes>;
								public static AUTH_API_INVALID_CREDENTIALS: number;
								public static AUTH_API_ACCESS_FORBIDDEN: number;
								public static AUTH_API_CLIENT_ERROR: number;
								public static AUTH_API_SERVER_ERROR: number;
								public static AUTH_TOKEN_ERROR: number;
								public static AUTH_URL_RESOLUTION: number;
								public static AUTH_APP_CERT_ERROR: number;
								public static getStatusCodeString(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module proxy {
							export class ProxyApi {
								public static class: java.lang.Class<com.google.android.gms.auth.api.proxy.ProxyApi>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.proxy.ProxyApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									performProxyRequest(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.proxy.ProxyRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.api.proxy.ProxyApi.ProxyResult>;
									getSpatulaHeader(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.api.proxy.ProxyApi.SpatulaHeaderResult>;
								});
								public constructor();
								public performProxyRequest(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.proxy.ProxyRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.api.proxy.ProxyApi.ProxyResult>;
								public getSpatulaHeader(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.api.proxy.ProxyApi.SpatulaHeaderResult>;
							}
							export module ProxyApi {
								export class ProxyResult extends com.google.android.gms.common.api.Result {
									public static class: java.lang.Class<com.google.android.gms.auth.api.proxy.ProxyApi.ProxyResult>;
									/**
									 * Constructs a new instance of the com.google.android.gms.auth.api.proxy.ProxyApi$ProxyResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getResponse(): com.google.android.gms.auth.api.proxy.ProxyResponse;
										getStatus(): com.google.android.gms.common.api.Status;
									});
									public constructor();
									public getStatus(): com.google.android.gms.common.api.Status;
									public getResponse(): com.google.android.gms.auth.api.proxy.ProxyResponse;
								}
								export class SpatulaHeaderResult extends com.google.android.gms.common.api.Result {
									public static class: java.lang.Class<com.google.android.gms.auth.api.proxy.ProxyApi.SpatulaHeaderResult>;
									/**
									 * Constructs a new instance of the com.google.android.gms.auth.api.proxy.ProxyApi$SpatulaHeaderResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getSpatulaHeader(): string;
										getStatus(): com.google.android.gms.common.api.Status;
									});
									public constructor();
									public getStatus(): com.google.android.gms.common.api.Status;
									public getSpatulaHeader(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module proxy {
							export class ProxyRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.proxy.ProxyRequest>;
								public static VERSION_CODE: number;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.proxy.ProxyRequest>;
								public static HTTP_METHOD_GET: number;
								public static HTTP_METHOD_POST: number;
								public static HTTP_METHOD_PUT: number;
								public static HTTP_METHOD_DELETE: number;
								public static HTTP_METHOD_HEAD: number;
								public static HTTP_METHOD_OPTIONS: number;
								public static HTTP_METHOD_TRACE: number;
								public static HTTP_METHOD_PATCH: number;
								public static LAST_CODE: number;
								public httpMethod: number;
								public timeoutMillis: number;
								public body: androidNative.Array<number>;
								public toString(): string;
								public getHeaderMap(): java.util.Map<string,string>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
							export module ProxyRequest {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.proxy.ProxyRequest.Builder>;
									public constructor(param0: string);
									public build(): com.google.android.gms.auth.api.proxy.ProxyRequest;
									public putHeader(param0: string, param1: string): com.google.android.gms.auth.api.proxy.ProxyRequest.Builder;
									public setBody(param0: androidNative.Array<number>): com.google.android.gms.auth.api.proxy.ProxyRequest.Builder;
									public setHttpMethod(param0: number): com.google.android.gms.auth.api.proxy.ProxyRequest.Builder;
									public setTimeoutMillis(param0: number): com.google.android.gms.auth.api.proxy.ProxyRequest.Builder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module proxy {
							export class ProxyResponse extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.proxy.ProxyResponse>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.proxy.ProxyResponse>;
								public static STATUS_CODE_NO_CONNECTION: number;
								public googlePlayServicesStatusCode: number;
								public recoveryAction: globalAndroid.app.PendingIntent;
								public statusCode: number;
								public body: androidNative.Array<number>;
								public constructor(param0: number, param1: java.util.Map<string,string>, param2: androidNative.Array<number>);
								public getHeaders(): java.util.Map<string,string>;
								public constructor(param0: number, param1: globalAndroid.app.PendingIntent, param2: number, param3: globalAndroid.os.Bundle, param4: androidNative.Array<number>);
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public static createErrorProxyResponse(param0: number, param1: globalAndroid.app.PendingIntent, param2: number, param3: java.util.Map<string,string>, param4: androidNative.Array<number>): com.google.android.gms.auth.api.proxy.ProxyResponse;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignIn {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignIn>;
								public static requestPermissions(param0: globalAndroid.app.Activity, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param3: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): void;
								public static getClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): com.google.android.gms.auth.api.signin.GoogleSignInClient;
								public static requestPermissions(param0: globalAndroid.app.Activity, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param3: androidNative.Array<com.google.android.gms.common.api.Scope>): void;
								public static requestPermissions(param0: globalAndroid.support.v4.app.Fragment, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param3: androidNative.Array<com.google.android.gms.common.api.Scope>): void;
								public static getAccountForScopes(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Scope, param2: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public static getSignedInAccountFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public static hasPermissions(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): boolean;
								public static getClient(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): com.google.android.gms.auth.api.signin.GoogleSignInClient;
								public static getLastSignedInAccount(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public static hasPermissions(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: androidNative.Array<com.google.android.gms.common.api.Scope>): boolean;
								public static requestPermissions(param0: globalAndroid.support.v4.app.Fragment, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param3: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): void;
								public static getAccountForExtension(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInAccount extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public getAccount(): globalAndroid.accounts.Account;
								public getGrantedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public getGivenName(): string;
								public static createDefault(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public equals(param0: any): boolean;
								public getIdToken(): string;
								public getDisplayName(): string;
								public isExpired(): boolean;
								public getFamilyName(): string;
								public getRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getPhotoUrl(): globalAndroid.net.Uri;
								public getEmail(): string;
								public getServerAuthCode(): string;
								public getId(): string;
								public hashCode(): number;
								public requestExtraScopes(param0: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInApi {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInApi>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.signin.GoogleSignInApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getSignInIntent(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.content.Intent;
									silentSignIn(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.OptionalPendingResult<com.google.android.gms.auth.api.signin.GoogleSignInResult>;
									signOut(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
									revokeAccess(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
									getSignInResultFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.auth.api.signin.GoogleSignInResult;
								});
								public constructor();
								public static EXTRA_SIGN_IN_ACCOUNT: string;
								public getSignInIntent(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.content.Intent;
								public silentSignIn(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.OptionalPendingResult<com.google.android.gms.auth.api.signin.GoogleSignInResult>;
								public getSignInResultFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.auth.api.signin.GoogleSignInResult;
								public signOut(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public revokeAccess(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.auth.api.signin.GoogleSignInOptions> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInClient>;
								public revokeAccess(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public silentSignIn(): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public signOut(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public getSignInIntent(): globalAndroid.content.Intent;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInOptions extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Api.ApiOptions.Optional, com.google.android.gms.common.internal.ReflectedParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
								public static DEFAULT_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public static DEFAULT_GAMES_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
								public getAccount(): globalAndroid.accounts.Account;
								public getServerClientId(): string;
								public getScopes(): java.util.ArrayList<com.google.android.gms.common.api.Scope>;
								public isServerAuthCodeRequested(): boolean;
								public getScopeArray(): androidNative.Array<com.google.android.gms.common.api.Scope>;
								public isForceCodeForRefreshToken(): boolean;
								public equals(param0: any): boolean;
								public isIdTokenRequested(): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public hashCode(): number;
								public getExtensions(): java.util.ArrayList<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
							}
							export module GoogleSignInOptions {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder>;
									public requestServerAuthCode(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public constructor();
									public requestIdToken(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public addExtension(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestEmail(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public setAccountName(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestServerAuthCode(param0: string, param1: boolean): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public setHostedDomain(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestScopes(param0: com.google.android.gms.common.api.Scope, param1: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptions);
									public requestId(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestProfile(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public build(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInOptionsExtension {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getExtensionType(): number;
									toBundle(): globalAndroid.os.Bundle;
									getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
								});
								public constructor();
								public static FITNESS: number;
								public static GAMES: number;
								public toBundle(): globalAndroid.os.Bundle;
								public getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
								public getExtensionType(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInResult extends com.google.android.gms.common.api.Result {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInResult>;
								public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.common.api.Status);
								public getStatus(): com.google.android.gms.common.api.Status;
								public getSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public isSuccess(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInStatusCodes extends com.google.android.gms.common.api.CommonStatusCodes {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInStatusCodes>;
								public static SIGN_IN_FAILED: number;
								public static SIGN_IN_CANCELLED: number;
								public static SIGN_IN_CURRENTLY_IN_PROGRESS: number;
								public static getStatusCodeString(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class RevocationBoundService {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.RevocationBoundService>;
								public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class SignInAccount extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.SignInAccount>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.SignInAccount>;
								public getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class GoogleSignInOptionsExtensionParcelable extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
									public constructor();
									public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension);
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public getType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class HashAccumulator {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.HashAccumulator>;
									public constructor();
									public addObject(param0: any): com.google.android.gms.auth.api.signin.internal.HashAccumulator;
									public hash(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class SignInConfiguration extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.SignInConfiguration>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.internal.SignInConfiguration>;
									public constructor();
									public hashCode(): number;
									public constructor(param0: string, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions);
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public equals(param0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class SignInHubActivity {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.SignInHubActivity>;
									public constructor();
									public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
									public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
									public onCreate(param0: globalAndroid.os.Bundle): void;
									public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class Storage {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.Storage>;
									public getSavedRefreshToken(): string;
									public getSavedDefaultGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
									public clear(): void;
									public getSavedDefaultGoogleSignInOptions(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
									public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.signin.internal.Storage;
									public saveDefaultGoogleSignInAccount(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class AccountPicker {
						public static class: java.lang.Class<com.google.android.gms.common.AccountPicker>;
						public static newChooseAccountIntent(param0: globalAndroid.accounts.Account, param1: java.util.ArrayList<globalAndroid.accounts.Account>, param2: androidNative.Array<string>, param3: boolean, param4: string, param5: string, param6: androidNative.Array<string>, param7: globalAndroid.os.Bundle): globalAndroid.content.Intent;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class BlockingServiceConnection {
						public static class: java.lang.Class<com.google.android.gms.common.BlockingServiceConnection>;
						public constructor();
						public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
						public getService(): globalAndroid.os.IBinder;
						public getServiceWithTimeout(param0: number, param1: java.util.concurrent.TimeUnit): globalAndroid.os.IBinder;
						public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ConnectionResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.common.ConnectionResult>;
						public static UNKNOWN: number;
						public static SUCCESS: number;
						public static SERVICE_MISSING: number;
						public static SERVICE_VERSION_UPDATE_REQUIRED: number;
						public static SERVICE_DISABLED: number;
						public static SIGN_IN_REQUIRED: number;
						public static INVALID_ACCOUNT: number;
						public static RESOLUTION_REQUIRED: number;
						public static NETWORK_ERROR: number;
						public static INTERNAL_ERROR: number;
						public static SERVICE_INVALID: number;
						public static DEVELOPER_ERROR: number;
						public static LICENSE_CHECK_FAILED: number;
						public static CANCELED: number;
						public static TIMEOUT: number;
						public static INTERRUPTED: number;
						public static API_UNAVAILABLE: number;
						public static SIGN_IN_FAILED: number;
						public static SERVICE_UPDATING: number;
						public static SERVICE_MISSING_PERMISSION: number;
						public static RESTRICTED_PROFILE: number;
						public static DRIVE_EXTERNAL_STORAGE_REQUIRED: number;
						public static RESULT_SUCCESS: com.google.android.gms.common.ConnectionResult;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.ConnectionResult>;
						public hasResolution(): boolean;
						public getErrorMessage(): string;
						public constructor();
						public getErrorCode(): number;
						public getResolution(): globalAndroid.app.PendingIntent;
						public isSuccess(): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public constructor(param0: number, param1: globalAndroid.app.PendingIntent);
						public constructor(param0: number);
						public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
						public constructor(param0: number, param1: globalAndroid.app.PendingIntent, param2: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ErrorDialogFragment {
						public static class: java.lang.Class<com.google.android.gms.common.ErrorDialogFragment>;
						public show(param0: globalAndroid.app.FragmentManager, param1: string): void;
						public constructor();
						public static newInstance(param0: globalAndroid.app.Dialog): com.google.android.gms.common.ErrorDialogFragment;
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static newInstance(param0: globalAndroid.app.Dialog, param1: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.gms.common.ErrorDialogFragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class Feature extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.common.Feature>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.Feature>;
						public constructor();
						public constructor(param0: string, param1: number);
						public constructor(param0: string, param1: number, param2: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getVersion(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class FirstPartyScopes {
						public static class: java.lang.Class<com.google.android.gms.common.FirstPartyScopes>;
						public static GAMES_1P: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GoogleApiAvailability extends com.google.android.gms.common.GoogleApiAvailabilityLight {
						public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailability>;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static getInstance(): com.google.android.gms.common.GoogleApiAvailability;
						public makeGooglePlayServicesAvailable(param0: globalAndroid.app.Activity): com.google.android.gms.tasks.Task<java.lang.Void>;
						public showErrorNotification(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult): void;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult): globalAndroid.app.PendingIntent;
						public getErrorDialog(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						public getClientVersion(param0: globalAndroid.content.Context): number;
						public static getInstance(): com.google.android.gms.common.GoogleApiAvailability;
						public showErrorDialogFragment(param0: globalAndroid.app.Activity, param1: number, param2: number): boolean;
						public showErrorNotification(param0: globalAndroid.content.Context, param1: number): void;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.app.PendingIntent;
						public getErrorResolutionIntent(param0: globalAndroid.content.Context, param1: number, param2: string): globalAndroid.content.Intent;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number, param3: string): globalAndroid.app.PendingIntent;
						public setDefaultNotificationChannelId(param0: globalAndroid.content.Context, param1: string): void;
						/** @deprecated */
						public getErrorResolutionIntent(param0: number): globalAndroid.content.Intent;
						public showErrorDialogFragment(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public getErrorDialog(param0: globalAndroid.app.Activity, param1: number, param2: number): globalAndroid.app.Dialog;
						public getErrorString(param0: number): string;
						public checkApiAvailability(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: androidNative.Array<com.google.android.gms.common.api.GoogleApi<any>>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						public isUserResolvableError(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GoogleApiAvailabilityLight {
						public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailabilityLight>;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						public static getInstance(): com.google.android.gms.common.GoogleApiAvailabilityLight;
						public getClientVersion(param0: globalAndroid.content.Context): number;
						public isPlayStorePossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.app.PendingIntent;
						public isUninstalledAppPossiblyUpdating(param0: globalAndroid.content.Context, param1: string): boolean;
						public getErrorResolutionIntent(param0: globalAndroid.content.Context, param1: number, param2: string): globalAndroid.content.Intent;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number, param3: string): globalAndroid.app.PendingIntent;
						/** @deprecated */
						public getErrorResolutionIntent(param0: number): globalAndroid.content.Intent;
						public getApkVersion(param0: globalAndroid.content.Context): number;
						public cancelAvailabilityErrorNotifications(param0: globalAndroid.content.Context): void;
						public getErrorString(param0: number): string;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						public verifyGooglePlayServicesIsAvailable(param0: globalAndroid.content.Context, param1: number): void;
						public isPlayServicesPossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						public isUserResolvableError(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesNotAvailableException {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesNotAvailableException>;
						public errorCode: number;
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesRepairableException extends com.google.android.gms.common.UserRecoverableException {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesRepairableException>;
						public getConnectionStatusCode(): number;
						public constructor(param0: number, param1: string, param2: globalAndroid.content.Intent);
						public constructor(param0: string, param1: globalAndroid.content.Intent);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesUtil extends com.google.android.gms.common.GooglePlayServicesUtilLight {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesUtil>;
						public static GMS_ERROR_DIALOG: string;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						/** @deprecated */
						public static showErrorNotification(param0: number, param1: globalAndroid.content.Context): void;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: globalAndroid.support.v4.app.Fragment, param3: number, param4: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public static getRemoteContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
						/** @deprecated */
						public static getErrorString(param0: number): string;
						public static getRemoteResource(param0: globalAndroid.content.Context): globalAndroid.content.res.Resources;
						/** @deprecated */
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						/** @deprecated */
						public static getErrorPendingIntent(param0: number, param1: globalAndroid.content.Context, param2: number): globalAndroid.app.PendingIntent;
						/** @deprecated */
						public static isUserRecoverableError(param0: number): boolean;
						/** @deprecated */
						public static getErrorDialog(param0: number, param1: globalAndroid.app.Activity, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						/** @deprecated */
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: number): boolean;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						/** @deprecated */
						public static getErrorDialog(param0: number, param1: globalAndroid.app.Activity, param2: number): globalAndroid.app.Dialog;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesUtilLight {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesUtilLight>;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_GAMES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						/** @deprecated */
						public static ensurePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): void;
						/** @deprecated */
						public static uidHasPackageName(param0: globalAndroid.content.Context, param1: number, param2: string): boolean;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						/** @deprecated */
						public static cancelAvailabilityErrorNotifications(param0: globalAndroid.content.Context): void;
						public static enableUsingApkIndependentContext(): void;
						/** @deprecated */
						public static isPlayStorePossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
						public static getRemoteContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
						/** @deprecated */
						public static getErrorString(param0: number): string;
						/** @deprecated */
						public static getGooglePlayServicesAvailabilityRecoveryIntent(param0: number): globalAndroid.content.Intent;
						public static isRestrictedUserProfile(param0: globalAndroid.content.Context): boolean;
						public static honorsDebugCertificates(param0: globalAndroid.content.Context): boolean;
						/** @deprecated */
						public static isSidewinderDevice(param0: globalAndroid.content.Context): boolean;
						public static getRemoteResource(param0: globalAndroid.content.Context): globalAndroid.content.res.Resources;
						/** @deprecated */
						public static isGooglePlayServicesUid(param0: globalAndroid.content.Context, param1: number): boolean;
						/** @deprecated */
						public static getErrorPendingIntent(param0: number, param1: globalAndroid.content.Context, param2: number): globalAndroid.app.PendingIntent;
						/** @deprecated */
						public static isUserRecoverableError(param0: number): boolean;
						/** @deprecated */
						public static isPlayServicesPossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
						/** @deprecated */
						public static getClientVersion(param0: globalAndroid.content.Context): number;
						/** @deprecated */
						public static getApkVersion(param0: globalAndroid.content.Context): number;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GoogleSignatureVerifier {
						public static class: java.lang.Class<com.google.android.gms.common.GoogleSignatureVerifier>;
						public isGooglePublicSignedPackage(param0: globalAndroid.content.pm.PackageInfo): boolean;
						public isPackageGoogleSigned(param0: string): boolean;
						public isUidGoogleSigned(param0: number): boolean;
						public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.common.GoogleSignatureVerifier;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ProGuardCanary {
						public static class: java.lang.Class<com.google.android.gms.common.ProGuardCanary>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class Scopes {
						public static class: java.lang.Class<com.google.android.gms.common.Scopes>;
						public static PROFILE: string;
						public static EMAIL: string;
						public static OPEN_ID: string;
						public static PLUS_LOGIN: string;
						public static PLUS_ME: string;
						public static GAMES: string;
						public static GAMES_LITE: string;
						public static CLOUD_SAVE: string;
						public static APP_STATE: string;
						public static DRIVE_FILE: string;
						public static DRIVE_APPFOLDER: string;
						public static DRIVE_FULL: string;
						public static DRIVE_APPS: string;
						public static FITNESS_ACTIVITY_READ: string;
						public static FITNESS_ACTIVITY_READ_WRITE: string;
						public static FITNESS_LOCATION_READ: string;
						public static FITNESS_LOCATION_READ_WRITE: string;
						public static FITNESS_BODY_READ: string;
						public static FITNESS_BODY_READ_WRITE: string;
						public static FITNESS_NUTRITION_READ: string;
						public static FITNESS_NUTRITION_READ_WRITE: string;
						public static FITNESS_BLOOD_PRESSURE_READ: string;
						public static FITNESS_BLOOD_PRESSURE_READ_WRITE: string;
						public static FITNESS_BLOOD_GLUCOSE_READ: string;
						public static FITNESS_BLOOD_GLUCOSE_READ_WRITE: string;
						public static FITNESS_OXYGEN_SATURATION_READ: string;
						public static FITNESS_OXYGEN_SATURATION_READ_WRITE: string;
						public static FITNESS_BODY_TEMPERATURE_READ: string;
						public static FITNESS_BODY_TEMPERATURE_READ_WRITE: string;
						public static FITNESS_REPRODUCTIVE_HEALTH_READ: string;
						public static FITNESS_REPRODUCTIVE_HEALTH_READ_WRITE: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class SignInButton {
						public static class: java.lang.Class<com.google.android.gms.common.SignInButton>;
						public static SIZE_STANDARD: number;
						public static SIZE_WIDE: number;
						public static SIZE_ICON_ONLY: number;
						public static COLOR_DARK: number;
						public static COLOR_LIGHT: number;
						public static COLOR_AUTO: number;
						public setSize(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public setColorScheme(param0: number): void;
						/** @deprecated */
						public setScopes(param0: androidNative.Array<com.google.android.gms.common.api.Scope>): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public setStyle(param0: number, param1: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setEnabled(param0: boolean): void;
						public onClick(param0: globalAndroid.view.View): void;
						/** @deprecated */
						public setStyle(param0: number, param1: number, param2: androidNative.Array<com.google.android.gms.common.api.Scope>): void;
					}
					export module SignInButton {
						export class ButtonSize {
							public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ButtonSize>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.SignInButton$ButtonSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class ColorScheme {
							public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ColorScheme>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.SignInButton$ColorScheme interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class SupportErrorDialogFragment {
						public static class: java.lang.Class<com.google.android.gms.common.SupportErrorDialogFragment>;
						public constructor();
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public show(param0: globalAndroid.support.v4.app.FragmentManager, param1: string): void;
						public static newInstance(param0: globalAndroid.app.Dialog, param1: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.gms.common.SupportErrorDialogFragment;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static newInstance(param0: globalAndroid.app.Dialog): com.google.android.gms.common.SupportErrorDialogFragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class UserRecoverableException {
						public static class: java.lang.Class<com.google.android.gms.common.UserRecoverableException>;
						public getIntent(): globalAndroid.content.Intent;
						public constructor(param0: string, param1: globalAndroid.content.Intent);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepForSdk {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepForSdkWithFieldsAndMethods {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdkWithFieldsAndMethods>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdkWithFieldsAndMethods interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepForSdkWithMembers {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdkWithMembers>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdkWithMembers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepName {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepName>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module common {
// 					export module api {
// 						export module Api {
// 							export module  {
// 							export abstract class AbstractClientBuilder<T, O>  extends com.google.android.gms.common.api.Api.BaseClientBuilder<any,any> {
// 								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>>;
// 								public buildClient(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: any, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): any;
// 								public constructor();
// 							}
// 							export class AnyClient {
// 								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AnyClient>;
// 								/**
// 								 * Constructs a new instance of the com.google.android.gms.common.api.Api$AnyClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 								 */
// 								public constructor(implementation: {
// 								});
// 								public constructor();
// 							}
// 							export class AnyClientKey<C>  extends java.lang.Object {
// 								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AnyClientKey<any>>;
// 								public constructor();
// 							}
// 							export class ApiOptions {
// 								public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions>;
// 								/**
// 								 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 								 */
// 								public constructor(implementation: {
// 								});
// 								public constructor();
// 							}
// 							export module ApiOptions {
// 								export class HasAccountOptions implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
// 									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasAccountOptions>;
// 									/**
// 									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 									 */
// 									public constructor(implementation: {
// 										getAccount(): globalAndroid.accounts.Account;
// 									});
// 									public constructor();
// 									public getAccount(): globalAndroid.accounts.Account;
// 								}
// 								export class HasGoogleSignInAccountOptions extends com.google.android.gms.common.api.Api.ApiOptions.HasOptions {
// 									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasGoogleSignInAccountOptions>;
// 									/**
// 									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasGoogleSignInAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 									 */
// 									public constructor(implementation: {
// 										getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
// 									});
// 									public constructor();
// 									public getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
// 								}
// 								export class HasOptions extends com.google.android.gms.common.api.Api.ApiOptions {
// 									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasOptions>;
// 									/**
// 									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 									 */
// 									public constructor(implementation: {
// 									});
// 									public constructor();
// 								}
// 								export class NoOptions extends com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
// 									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
// 								}
// 								export class NotRequiredOptions extends com.google.android.gms.common.api.Api.ApiOptions {
// 									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions>;
// 									/**
// 									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$NotRequiredOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 									 */
// 									public constructor(implementation: {
// 									});
// 									public constructor();
// 								}
// 								export class Optional implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
// 									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.Optional>;
// 									/**
// 									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$Optional interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 									 */
// 									public constructor(implementation: {
// 									});
// 									public constructor();
// 								}
// 							}
// 							export class BaseClientBuilder<T, O>  extends java.lang.Object {
// 								public static class: java.lang.Class<com.google.android.gms.common.api.Api.BaseClientBuilder<any,any>>;
// 								public static API_PRIORITY_GAMES: number;
// 								public static API_PRIORITY_PLUS: number;
// 								public static API_PRIORITY_OTHER: number;
// 								public getImpliedScopes(param0: O): java.util.List<com.google.android.gms.common.api.Scope>;
// 								public getPriority(): number;
// 								public constructor();
// 							}
// 							export class Client extends com.google.android.gms.common.api.Api.AnyClient {
// 								public static class: java.lang.Class<com.google.android.gms.common.api.Api.Client>;
// 								/**
// 								 * Constructs a new instance of the com.google.android.gms.common.api.Api$Client interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 								 */
// 								public constructor(implementation: {
// 									connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
// 									disconnect(): void;
// 									isConnected(): boolean;
// 									isConnecting(): boolean;
// 									getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
// 									requiresSignIn(): boolean;
// 									onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
// 									requiresAccount(): boolean;
// 									requiresGooglePlayServices(): boolean;
// 									providesSignIn(): boolean;
// 									getSignInIntent(): globalAndroid.content.Intent;
// 									dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
// 									getServiceBrokerBinder(): globalAndroid.os.IBinder;
// 									getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
// 									getEndpointPackageName(): string;
// 									getMinApkVersion(): number;
// 									getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
// 								});
// 								public constructor();
// 								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
// 								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
// 								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
// 								public requiresSignIn(): boolean;
// 								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
// 								public getSignInIntent(): globalAndroid.content.Intent;
// 								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
// 								public getEndpointPackageName(): string;
// 								public requiresGooglePlayServices(): boolean;
// 								public isConnected(): boolean;
// 								public requiresAccount(): boolean;
// 								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
// 								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
// 								public getMinApkVersion(): number;
// 								public disconnect(): void;
// 								public isConnecting(): boolean;
// 								public providesSignIn(): boolean;
// 							}
// 							export class ClientKey<C>  extends com.google.android.gms.common.api.Api.AnyClientKey<any> {
// 								public static class: java.lang.Class<com.google.android.gms.common.api.Api.ClientKey<any>>;
// 								public constructor();
// 							}
// 							export class SimpleClient<T>  extends com.google.android.gms.common.api.Api.AnyClient {
// 								public static class: java.lang.Class<com.google.android.gms.common.api.Api.SimpleClient<any>>;
// 								/**
// 								 * Constructs a new instance of the com.google.android.gms.common.api.Api$SimpleClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 								 */
// 								public constructor(implementation: {
// 									getStartServiceAction(): string;
// 									getServiceDescriptor(): string;
// 									createServiceInterface(param0: globalAndroid.os.IBinder): any;
// 									getContext(): globalAndroid.content.Context;
// 									setState(param0: number, param1: any): void;
// 								});
// 								public constructor();
// 								public getStartServiceAction(): string;
// 								public createServiceInterface(param0: globalAndroid.os.IBinder): any;
// 								public getContext(): globalAndroid.content.Context;
// 								public getServiceDescriptor(): string;
// 								public setState(param0: number, param1: any): void;
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class ApiException {
							public static class: java.lang.Class<com.google.android.gms.common.api.ApiException>;
							public mStatus: com.google.android.gms.common.api.Status;
							public getStatusCode(): number;
							public constructor(param0: com.google.android.gms.common.api.Status);
							/** @deprecated */
							public getStatusMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class AvailabilityException {
							public static class: java.lang.Class<com.google.android.gms.common.api.AvailabilityException>;
							public constructor(param0: globalAndroid.support.v4.util.ArrayMap<com.google.android.gms.common.api.internal.zai<any>,com.google.android.gms.common.ConnectionResult>);
							public getMessage(): string;
							public getConnectionResult(param0: com.google.android.gms.common.api.GoogleApi<any>): com.google.android.gms.common.ConnectionResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Batch extends com.google.android.gms.common.api.internal.BasePendingResult<com.google.android.gms.common.api.BatchResult> {
							public static class: java.lang.Class<com.google.android.gms.common.api.Batch>;
							public cancel(): void;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.BatchResult;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
						}
						export module Batch {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.api.Batch.Builder>;
								public build(): com.google.android.gms.common.api.Batch;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class BatchResult extends com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.common.api.BatchResult>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public take(param0: com.google.android.gms.common.api.BatchResultToken<any>): com.google.android.gms.common.api.Result;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class BatchResultToken<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.BatchResultToken<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class BooleanResult extends com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.common.api.BooleanResult>;
							public constructor(param0: com.google.android.gms.common.api.Status, param1: boolean);
							public getStatus(): com.google.android.gms.common.api.Status;
							public hashCode(): number;
							public getValue(): boolean;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class CommonStatusCodes {
							public static class: java.lang.Class<com.google.android.gms.common.api.CommonStatusCodes>;
							public static SUCCESS_CACHE: number;
							public static SUCCESS: number;
							public static SERVICE_VERSION_UPDATE_REQUIRED: number;
							public static SERVICE_DISABLED: number;
							public static SIGN_IN_REQUIRED: number;
							public static INVALID_ACCOUNT: number;
							public static RESOLUTION_REQUIRED: number;
							public static NETWORK_ERROR: number;
							public static INTERNAL_ERROR: number;
							public static DEVELOPER_ERROR: number;
							public static ERROR: number;
							public static INTERRUPTED: number;
							public static TIMEOUT: number;
							public static CANCELED: number;
							public static API_NOT_CONNECTED: number;
							public constructor();
							public static getStatusCodeString(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class DataBufferResponse<T, R>  extends com.google.android.gms.common.api.Response<any> implements com.google.android.gms.common.data.DataBuffer<any>  {
							public static class: java.lang.Class<com.google.android.gms.common.api.DataBufferResponse<any,any>>;
							public constructor();
							public singleRefIterator(): java.util.Iterator<any>;
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public iterator(): java.util.Iterator<any>;
							/** @deprecated */
							public close(): void;
							public isClosed(): boolean;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public getCount(): number;
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class GoogleApi<O>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi<any>>;
							public zabm: com.google.android.gms.common.api.internal.GoogleApiManager;
							public doRegisterEventListener(param0: com.google.android.gms.common.api.internal.RegistrationMethods<any,any>): com.google.android.gms.tasks.Task<any>;
							public registerListener(param0: any, param1: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public doWrite(param0: com.google.android.gms.common.api.internal.TaskApiCall<any,any>): com.google.android.gms.tasks.Task<any>;
							public doRead(param0: com.google.android.gms.common.api.internal.TaskApiCall<any,any>): com.google.android.gms.tasks.Task<any>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: globalAndroid.os.Looper);
							public getApplicationContext(): globalAndroid.content.Context;
							public doBestEffortWrite(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public doUnregisterEventListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public getLooper(): globalAndroid.os.Looper;
							public doWrite(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public getApi(): com.google.android.gms.common.api.Api<O>;
							/** @deprecated */
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public disconnectService(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public doBestEffortWrite(param0: com.google.android.gms.common.api.internal.TaskApiCall<any,any>): com.google.android.gms.tasks.Task<any>;
							public asGoogleApiClient(): com.google.android.gms.common.api.GoogleApiClient;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public getApiOptions(): O;
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public createClientSettingsBuilder(): com.google.android.gms.common.internal.ClientSettings.Builder;
							public doRead(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							/** @deprecated */
							public doRegisterEventListener(param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>, param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>): com.google.android.gms.tasks.Task<any>;
							public getInstanceId(): number;
						}
						export module GoogleApi {
							export class Settings {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi.Settings>;
								public static DEFAULT_SETTINGS: com.google.android.gms.common.api.GoogleApi.Settings;
								public zabn: com.google.android.gms.common.api.internal.StatusExceptionMapper;
								public zabo: globalAndroid.os.Looper;
							}
							export module Settings {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi.Settings.Builder>;
									public constructor();
									public setLooper(param0: globalAndroid.os.Looper): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
									public build(): com.google.android.gms.common.api.GoogleApi.Settings;
									public setMapper(param0: com.google.android.gms.common.api.internal.StatusExceptionMapper): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class GoogleApiActivity {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiActivity>;
							public constructor();
							public onCancel(param0: globalAndroid.content.DialogInterface): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class GoogleApiClient {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient>;
							public static DEFAULT_ACCOUNT: string;
							public static SIGN_IN_MODE_REQUIRED: number;
							public static SIGN_IN_MODE_OPTIONAL: number;
							public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public getLooper(): globalAndroid.os.Looper;
							public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
							public blockingConnect(): com.google.android.gms.common.ConnectionResult;
							public connect(): void;
							public stopAutoManage(param0: globalAndroid.support.v4.app.FragmentActivity): void;
							public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public maybeSignOut(): void;
							public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public hasApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
							public constructor();
							public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public getContext(): globalAndroid.content.Context;
							public disconnect(): void;
							public isConnected(): boolean;
							public reconnect(): void;
							public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
							public isConnecting(): boolean;
							public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public registerListener(param0: any): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							public static dumpAll(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
							public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
							public static getAllClients(): java.util.Set<com.google.android.gms.common.api.GoogleApiClient>;
							public getClient(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>): com.google.android.gms.common.api.Api.Client;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public connect(param0: number): void;
						}
						export module GoogleApiClient {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.Builder>;
								public addApiIfAvailable(param0: com.google.android.gms.common.api.Api<any>, param1: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public build(): com.google.android.gms.common.api.GoogleApiClient;
								public useDefaultAccount(): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public buildClientSettings(): com.google.android.gms.common.internal.ClientSettings;
								public addScope(param0: com.google.android.gms.common.api.Scope): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApiIfAvailable(param0: com.google.android.gms.common.api.Api, param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions, param2: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addOnConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public enableAutoManage(param0: globalAndroid.support.v4.app.FragmentActivity, param1: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public enableAutoManage(param0: globalAndroid.support.v4.app.FragmentActivity, param1: number, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setViewForPopups(param0: globalAndroid.view.View): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setHandler(param0: globalAndroid.os.Handler): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addScopeNames(param0: androidNative.Array<string>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public constructor(param0: globalAndroid.content.Context);
								public addApi(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApi(param0: com.google.android.gms.common.api.Api, param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setGravityForPopups(param0: number): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setAccountName(param0: string): com.google.android.gms.common.api.GoogleApiClient.Builder;
							}
							export class ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$ConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnected(param0: globalAndroid.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public static CAUSE_SERVICE_DISCONNECTED: number;
								public static CAUSE_NETWORK_LOST: number;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
							export class OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$OnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class OptionalPendingResult<R>  extends com.google.android.gms.common.api.PendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.OptionalPendingResult<any>>;
							public constructor();
							public isDone(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class PendingResult<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult<any>>;
							public constructor();
							public cancel(): void;
							public isCanceled(): boolean;
							public await(param0: number, param1: java.util.concurrent.TimeUnit): R;
							public await(): R;
							public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
							public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
							public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
							public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
						}
						export module PendingResult {
							export class StatusListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult.StatusListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.PendingResult$StatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onComplete(param0: com.google.android.gms.common.api.Status): void;
								});
								public constructor();
								public onComplete(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class PendingResults {
							public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults>;
							public static immediateFailedResult(param0: com.google.android.gms.common.api.Result, param1: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public static canceledPendingResult(param0: com.google.android.gms.common.api.Result): com.google.android.gms.common.api.PendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Result, param1: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.OptionalPendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Result): com.google.android.gms.common.api.OptionalPendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public static canceledPendingResult(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Releasable {
							public static class: java.lang.Class<com.google.android.gms.common.api.Releasable>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.Releasable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								release(): void;
							});
							public constructor();
							public release(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class ResolvableApiException extends com.google.android.gms.common.api.ApiException {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResolvableApiException>;
							public constructor(param0: com.google.android.gms.common.api.Status);
							public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
							public getResolution(): globalAndroid.app.PendingIntent;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class ResolvingResultCallbacks<R>  extends com.google.android.gms.common.api.ResultCallbacks<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResolvingResultCallbacks<any>>;
							public constructor();
							public onSuccess(param0: any): void;
							public constructor(param0: globalAndroid.app.Activity, param1: number);
							public onUnresolvableFailure(param0: com.google.android.gms.common.api.Status): void;
							public onResult(param0: any): void;
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Response<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.Response<any>>;
							public constructor();
							public getResult(): T;
							public constructor(param0: T);
							public setResult(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Result {
							public static class: java.lang.Class<com.google.android.gms.common.api.Result>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getStatus(): com.google.android.gms.common.api.Status;
							});
							public constructor();
							public getStatus(): com.google.android.gms.common.api.Status;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class ResultCallback<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultCallback<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.ResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResult(param0: R): void;
							});
							public constructor();
							public onResult(param0: R): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class ResultCallbacks<R>  extends com.google.android.gms.common.api.ResultCallback<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultCallbacks<any>>;
							public constructor();
							public onSuccess(param0: any): void;
							public onResult(param0: any): void;
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class ResultTransform<R, S>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultTransform<any,any>>;
							public constructor();
							public onSuccess(param0: R): com.google.android.gms.common.api.PendingResult<S>;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.PendingResult<S>;
							public onFailure(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.Status;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Scope extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.api.Scope>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Scope>;
							public constructor();
							public getScopeUri(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Status extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result, com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.api.Status>;
							public static RESULT_SUCCESS: com.google.android.gms.common.api.Status;
							public static RESULT_INTERRUPTED: com.google.android.gms.common.api.Status;
							public static RESULT_INTERNAL_ERROR: com.google.android.gms.common.api.Status;
							public static RESULT_TIMEOUT: com.google.android.gms.common.api.Status;
							public static RESULT_CANCELED: com.google.android.gms.common.api.Status;
							public static RESULT_DEAD_CLIENT: com.google.android.gms.common.api.Status;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Status>;
							public constructor();
							public hasResolution(): boolean;
							public getStatus(): com.google.android.gms.common.api.Status;
							public isInterrupted(): boolean;
							public hashCode(): number;
							public toString(): string;
							public getResolution(): globalAndroid.app.PendingIntent;
							public constructor(param0: number);
							public isCanceled(): boolean;
							public getStatusCode(): number;
							public getStatusMessage(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: string, param2: globalAndroid.app.PendingIntent);
							public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
							public equals(param0: any): boolean;
							public isSuccess(): boolean;
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class TransformedResult<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.TransformedResult<any>>;
							public constructor();
							public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
							public andFinally(param0: com.google.android.gms.common.api.ResultCallbacks<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class UnsupportedApiCallException {
							public static class: java.lang.Class<com.google.android.gms.common.api.UnsupportedApiCallException>;
							public constructor(param0: com.google.android.gms.common.Feature);
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class ActivityLifecycleObserver {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ActivityLifecycleObserver>;
								public onStopCallOnce(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class ApiExceptionMapper extends com.google.android.gms.common.api.internal.StatusExceptionMapper {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ApiExceptionMapper>;
								public constructor();
								public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class BackgroundDetector {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.BackgroundDetector>;
								public readCurrentStateIfPossible(param0: boolean): boolean;
								public isInBackground(): boolean;
								public onActivityResumed(param0: globalAndroid.app.Activity): void;
								public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
								public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
								public onTrimMemory(param0: number): void;
								public onLowMemory(): void;
								public addListener(param0: com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener): void;
								public onActivityStarted(param0: globalAndroid.app.Activity): void;
								public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
								public onActivityPaused(param0: globalAndroid.app.Activity): void;
								public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
								public static initialize(param0: globalAndroid.app.Application): void;
								public onActivityStopped(param0: globalAndroid.app.Activity): void;
								public static getInstance(): com.google.android.gms.common.api.internal.BackgroundDetector;
							}
							export module BackgroundDetector {
								export class BackgroundStateChangeListener {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.BackgroundDetector$BackgroundStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onBackgroundStateChanged(param0: boolean): void;
									});
									public constructor();
									public onBackgroundStateChanged(param0: boolean): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class BaseImplementation {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation>;
								public constructor();
							}
							export module BaseImplementation {
								export abstract class ApiMethodImpl<R, A>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> implements com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any>  {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>>;
									public constructor();
									public getApi(): com.google.android.gms.common.api.Api<any>;
									public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
									/** @deprecated */
									public constructor(param0: globalAndroid.os.Looper);
									public getClientKey(): com.google.android.gms.common.api.Api.AnyClientKey<any>;
									public onSetFailedResult(param0: any): void;
									public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
									public doExecute(param0: any): void;
									public setResult(param0: any): void;
									/** @deprecated */
									public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
									public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
									public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								}
								export class ResultHolder<R>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.BaseImplementation$ResultHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										setResult(param0: R): void;
										setFailedResult(param0: com.google.android.gms.common.api.Status): void;
									});
									public constructor();
									public setResult(param0: R): void;
									public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class BasePendingResult<R>  extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult<any>>;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public setCancelToken(param0: com.google.android.gms.common.internal.ICancelToken): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
								public constructor();
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
								public setResult(param0: any): void;
								public await(): any;
								public isCanceled(): boolean;
								public isReady(): boolean;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
							}
							export module BasePendingResult {
								export class CallbackHandler<R>  extends com.google.android.gms.internal.base.zal {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>>;
									public constructor();
									public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
									public handleMessage(param0: globalAndroid.os.Message): void;
									public constructor(param0: globalAndroid.os.Looper);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class DataHolderNotifier<L>  extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.DataHolderNotifier<any>>;
								public onNotifyListenerFailed(): void;
								public notifyListener(param0: any, param1: com.google.android.gms.common.data.DataHolder): void;
								public notifyListener(param0: any): void;
								public constructor(param0: com.google.android.gms.common.data.DataHolder);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class DataHolderResult implements com.google.android.gms.common.api.Releasable, com.google.android.gms.common.api.Result {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.DataHolderResult>;
								public mStatus: com.google.android.gms.common.api.Status;
								public mDataHolder: com.google.android.gms.common.data.DataHolder;
								public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: com.google.android.gms.common.api.Status);
								public getStatus(): com.google.android.gms.common.api.Status;
								public release(): void;
								public constructor(param0: com.google.android.gms.common.data.DataHolder);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class GoogleApiManager {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager>;
								public static zahw: com.google.android.gms.common.api.Status;
								public handleMessage(param0: globalAndroid.os.Message): boolean;
								public static zabc(): com.google.android.gms.common.api.internal.GoogleApiManager;
								public zabd(): number;
								public static reportSignOut(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class GoogleServices {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleServices>;
								public static isMeasurementExplicitlyDisabled(): boolean;
								public static initialize(param0: globalAndroid.content.Context, param1: string, param2: boolean): com.google.android.gms.common.api.Status;
								public static getGoogleAppId(): string;
								public static initialize(param0: globalAndroid.content.Context): com.google.android.gms.common.api.Status;
								public static isMeasurementEnabled(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class IStatusCallback {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.IStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onResult(param0: com.google.android.gms.common.api.Status): void;
								});
								public constructor();
								public onResult(param0: com.google.android.gms.common.api.Status): void;
							}
							export module IStatusCallback {
								export abstract class Stub extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.api.internal.IStatusCallback {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback.Stub>;
									public constructor(param0: string);
									public constructor();
									public onResult(param0: com.google.android.gms.common.api.Status): void;
									public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
									public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.api.internal.IStatusCallback;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class LifecycleActivity {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleActivity>;
								public asObject(): any;
								public asFragmentActivity(): globalAndroid.support.v4.app.FragmentActivity;
								public constructor(param0: globalAndroid.app.Activity);
								public constructor(param0: globalAndroid.content.ContextWrapper);
								public isChimera(): boolean;
								public isSupport(): boolean;
								public asActivity(): globalAndroid.app.Activity;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class LifecycleCallback {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleCallback>;
								public mLifecycleFragment: com.google.android.gms.common.api.internal.LifecycleFragment;
								public static getFragment(param0: globalAndroid.content.ContextWrapper): com.google.android.gms.common.api.internal.LifecycleFragment;
								public onResume(): void;
								public static getFragment(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.LifecycleFragment;
								public onDestroy(): void;
								public static getFragment(param0: com.google.android.gms.common.api.internal.LifecycleActivity): com.google.android.gms.common.api.internal.LifecycleFragment;
								public getActivity(): globalAndroid.app.Activity;
								public onStop(): void;
								public constructor(param0: com.google.android.gms.common.api.internal.LifecycleFragment);
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public onStart(): void;
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class LifecycleFragment {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleFragment>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.LifecycleFragment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCallbackOrNull(param0: string, param1: java.lang.Class<any>): com.google.android.gms.common.api.internal.LifecycleCallback;
									addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
									startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
									getLifecycleActivity(): globalAndroid.app.Activity;
									isCreated(): boolean;
									isStarted(): boolean;
								});
								public constructor();
								public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
								public isCreated(): boolean;
								public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
								public getCallbackOrNull(param0: string, param1: java.lang.Class<any>): com.google.android.gms.common.api.internal.LifecycleCallback;
								public isStarted(): boolean;
								public getLifecycleActivity(): globalAndroid.app.Activity;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class ListenerHolder<L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder<any>>;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public clear(): void;
								public notifyListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any>): void;
								public hasListener(): boolean;
							}
							export module ListenerHolder {
								export class ListenerKey<L>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>>;
									public hashCode(): number;
									public equals(param0: any): boolean;
								}
								export class Notifier<L>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.ListenerHolder$Notifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										notifyListener(param0: L): void;
										onNotifyListenerFailed(): void;
									});
									public constructor();
									public notifyListener(param0: L): void;
									public onNotifyListenerFailed(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class ListenerHolders {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolders>;
								public static createListenerKey(param0: any, param1: string): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>;
								public constructor();
								public static createListenerHolder(param0: any, param1: globalAndroid.os.Looper, param2: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
								public release(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class OptionalPendingResultImpl<R>  extends com.google.android.gms.common.api.OptionalPendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.OptionalPendingResultImpl<any>>;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public isCanceled(): boolean;
								public constructor(param0: com.google.android.gms.common.api.PendingResult<any>);
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								public constructor();
								public isDone(): boolean;
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								public await(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class PendingResultFacade<A, B>  extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.PendingResultFacade<any,any>>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class RegisterListenerMethod<A, L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>>;
								public registerListener(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public clearListener(): void;
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>, param1: androidNative.Array<com.google.android.gms.common.Feature>, param2: boolean);
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>);
								public shouldAutoResolveMissingFeatures(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class RegistrationMethods<A, L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegistrationMethods<any,any>>;
								public zajy: com.google.android.gms.common.api.internal.RegisterListenerMethod<A,L>;
								public zajz: com.google.android.gms.common.api.internal.UnregisterListenerMethod<A,L>;
								public static builder(): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<any,any>;
							}
							export module RegistrationMethods {
								export class Builder<A, L>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegistrationMethods.Builder<any,any>>;
									public setAutoResolveMissingFeatures(param0: boolean): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public withHolder(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									/** @deprecated */
									public register(param0: com.google.android.gms.common.util.BiConsumer<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public unregister(param0: com.google.android.gms.common.api.internal.RemoteCall<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public register(param0: com.google.android.gms.common.api.internal.RemoteCall<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public build(): com.google.android.gms.common.api.internal.RegistrationMethods<A,L>;
									public setFeatures(param0: androidNative.Array<com.google.android.gms.common.Feature>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									/** @deprecated */
									public unregister(param0: com.google.android.gms.common.util.BiConsumer<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class RemoteCall<T, U>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RemoteCall<any,any>>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.RemoteCall<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									accept(param0: T, param1: U): void;
								});
								public constructor();
								public accept(param0: T, param1: U): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class SignInConnectionListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.SignInConnectionListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.SignInConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onComplete(): void;
								});
								public constructor();
								public onComplete(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class StatusCallback extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusCallback>;
								public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
								public constructor();
								public onResult(param0: com.google.android.gms.common.api.Status): void;
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class StatusExceptionMapper {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusExceptionMapper>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.StatusExceptionMapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
								});
								public constructor();
								public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class StatusPendingResult extends com.google.android.gms.common.api.internal.BasePendingResult<com.google.android.gms.common.api.Status> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusPendingResult>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class TaskApiCall<A, ResultT>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskApiCall<any,any>>;
								/** @deprecated */
								public constructor();
								public zabt(): androidNative.Array<com.google.android.gms.common.Feature>;
								public doExecute(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<ResultT>): void;
								public shouldAutoResolveMissingFeatures(): boolean;
								public static builder(): com.google.android.gms.common.api.internal.TaskApiCall.Builder<any,any>;
							}
							export module TaskApiCall {
								export class Builder<A, ResultT>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskApiCall.Builder<any,any>>;
									public build(): com.google.android.gms.common.api.internal.TaskApiCall<A,ResultT>;
									public setFeatures(param0: androidNative.Array<com.google.android.gms.common.Feature>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									public setAutoResolveMissingFeatures(param0: boolean): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									/** @deprecated */
									public execute(param0: com.google.android.gms.common.util.BiConsumer<A,com.google.android.gms.tasks.TaskCompletionSource<ResultT>>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class TaskUtil {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskUtil>;
								public static setResultOrApiException(param0: com.google.android.gms.common.api.Status, param1: any, param2: com.google.android.gms.tasks.TaskCompletionSource<any>): void;
								public static setResultOrApiException(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
								public constructor();
								/** @deprecated */
								public static toVoidTaskThatFailsOnFalse(param0: com.google.android.gms.tasks.Task<java.lang.Boolean>): com.google.android.gms.tasks.Task<java.lang.Void>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class UnregisterListenerMethod<A, L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>>;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public unregisterListener(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>): void;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaa extends com.google.android.gms.tasks.OnCompleteListener<java.util.Map<com.google.android.gms.common.api.internal.zai<any>,string>> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaa>;
								public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
								public onComplete(param0: com.google.android.gms.tasks.Task<java.util.Map<com.google.android.gms.common.api.internal.zai<any>,string>>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaab {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaab>;
								public constructor();
								public zaai(): void;
								public zaah(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaac extends com.google.android.gms.common.api.PendingResult.StatusListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaac>;
								public onComplete(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaad extends com.google.android.gms.tasks.OnCompleteListener<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaad>;
								public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaae extends com.google.android.gms.common.api.internal.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaae>;
								public onResume(): void;
								public onStop(): void;
								public onStart(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaf>;
								public constructor(param0: com.google.android.gms.common.api.internal.zai<any>);
								public zaal(): com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaag extends com.google.android.gms.common.api.GoogleApiClient {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaag>;
								public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public constructor();
								public connect(param0: number): void;
								public connect(): void;
								public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public stopAutoManage(param0: globalAndroid.support.v4.app.FragmentActivity): void;
								public isConnected(): boolean;
								public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public reconnect(): void;
								public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
								public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public constructor(param0: string);
								public disconnect(): void;
								public isConnecting(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaah extends com.google.android.gms.common.api.internal.zabd {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaah>;
								public disconnect(): boolean;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabe);
								public begin(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public connect(): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaai extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaai>;
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaj extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaj>;
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaak extends com.google.android.gms.common.api.internal.zabd {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaak>;
								public disconnect(): boolean;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public begin(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabe, param1: com.google.android.gms.common.internal.ClientSettings, param2: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>, param5: java.util.concurrent.locks.Lock, param6: globalAndroid.content.Context);
								public connect(): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaal>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaam extends com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaam>;
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zaak, param1: com.google.android.gms.common.api.Api<any>, param2: boolean);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaan extends com.google.android.gms.common.api.internal.zaau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaan>;
								public constructor(param0: java.util.Map<com.google.android.gms.common.api.Api.Client,com.google.android.gms.common.api.internal.zaam>);
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaao extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaao>;
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaap extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaap>;
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaq extends com.google.android.gms.common.api.internal.zaau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaq>;
								public constructor(param0: java.util.ArrayList<com.google.android.gms.common.api.Api.Client>);
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaar extends com.google.android.gms.signin.internal.zac {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaar>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaas extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaas>;
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaat implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaat>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zaau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaau>;
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaav extends com.google.android.gms.common.api.internal.zabd {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaav>;
								public disconnect(): boolean;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabe);
								public begin(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public connect(): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaw extends com.google.android.gms.common.api.GoogleApiClient implements com.google.android.gms.common.api.internal.zabt {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaw>;
								public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.locks.Lock, param2: globalAndroid.os.Looper, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.GoogleApiAvailability, param5: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>, param6: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param7: java.util.List<com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks>, param8: java.util.List<com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener>, param9: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>,com.google.android.gms.common.api.Api.Client>, param10: number, param11: number, param12: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>, param13: boolean);
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public getClient(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>): com.google.android.gms.common.api.Api.Client;
								public getContext(): globalAndroid.content.Context;
								public connect(param0: number): void;
								public connect(): void;
								public stopAutoManage(param0: globalAndroid.support.v4.app.FragmentActivity): void;
								public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
								public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public constructor();
								public maybeSignOut(): void;
								public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public isConnected(): boolean;
								public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public reconnect(): void;
								public hasApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public disconnect(): void;
								public isConnecting(): boolean;
								public registerListener(param0: any): com.google.android.gms.common.api.internal.ListenerHolder<any>;
								public getLooper(): globalAndroid.os.Looper;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaax extends com.google.android.gms.common.internal.GmsClientEventManager.GmsClientEventState {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaax>;
								public getConnectionHint(): globalAndroid.os.Bundle;
								public isConnected(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaay extends com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaay>;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaz extends com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaz>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaba extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.common.api.Status> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaba>;
								public onResult(param0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabb extends com.google.android.gms.internal.base.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabb>;
								public handleMessage(param0: globalAndroid.os.Message): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabc extends com.google.android.gms.common.api.internal.zabr {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabc>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabd {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabd>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									begin(): void;
									enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									disconnect(): boolean;
									connect(): void;
									onConnected(param0: globalAndroid.os.Bundle): void;
									zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public disconnect(): boolean;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public begin(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public connect(): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabe implements com.google.android.gms.common.api.internal.zabs, com.google.android.gms.common.api.internal.zar {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabe>;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public maybeSignOut(): void;
								public connect(): void;
								public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public isConnected(): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zaaw, param2: java.util.concurrent.locks.Lock, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.GoogleApiAvailabilityLight, param5: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>,com.google.android.gms.common.api.Api.Client>, param6: com.google.android.gms.common.internal.ClientSettings, param7: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>, param9: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>, param10: com.google.android.gms.common.api.internal.zabt);
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public disconnect(): void;
								public isConnecting(): boolean;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabf>;
								public zaan(): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zabd);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabg extends com.google.android.gms.internal.base.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabg>;
								public handleMessage(param0: globalAndroid.os.Message): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabh {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabh>;
								public static zabb(): java.util.concurrent.ExecutorService;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabi extends com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabi>;
								public onBackgroundStateChanged(param0: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabj {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabj>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabk {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabk>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabl {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabl>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabm extends com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabm>;
								public onSignOutComplete(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabn {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabn>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabo {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabo>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabp<O>  extends com.google.android.gms.common.api.internal.zaag {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabp<any>>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApi<any>);
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public constructor();
								public constructor(param0: string);
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public getContext(): globalAndroid.content.Context;
								public getLooper(): globalAndroid.os.Looper;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabq {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabq>;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zabr);
								public unregister(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zabr {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabr>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									connect(): void;
									blockingConnect(): com.google.android.gms.common.ConnectionResult;
									blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
									disconnect(): void;
									getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
									isConnected(): boolean;
									isConnecting(): boolean;
									maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
									maybeSignOut(): void;
									dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
									zaw(): void;
								});
								public constructor();
								public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public isConnected(): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public maybeSignOut(): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public disconnect(): void;
								public isConnecting(): boolean;
								public connect(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabt {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabt>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zab(param0: globalAndroid.os.Bundle): void;
									zac(param0: com.google.android.gms.common.ConnectionResult): void;
									zab(param0: number, param1: boolean): void;
								});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabu extends com.google.android.gms.common.api.internal.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabu>;
								public getTask(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public onDestroy(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabv {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabv>;
								public zajq: com.google.android.gms.common.api.internal.zab;
								public zajr: number;
								public zajs: com.google.android.gms.common.api.GoogleApi<any>;
								public constructor(param0: com.google.android.gms.common.api.internal.zab, param1: number, param2: com.google.android.gms.common.api.GoogleApi<any>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabw>;
								public zajw: com.google.android.gms.common.api.internal.RegisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient,any>;
								public zajx: com.google.android.gms.common.api.internal.UnregisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient,any>;
								public constructor(param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient,any>, param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient,any>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabx {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabx>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaby extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaby>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabz extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabz>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaca extends com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaca>;
								public registerListener(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacb extends com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacb>;
								public unregisterListener(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacc {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacc>;
								public static zabb(): java.util.concurrent.ExecutorService;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacd<R>  extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacd<any>>;
								public constructor(param0: com.google.android.gms.common.api.Status);
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public isCanceled(): boolean;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								public constructor();
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								public await(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zace extends com.google.android.gms.signin.internal.zac implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zace>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public zabs(): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>);
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public constructor();
								public constructor(param0: string);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.ClientSettings);
								public zabq(): com.google.android.gms.signin.zad;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacf>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacg>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zach {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zach>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zach interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zag(param0: com.google.android.gms.common.ConnectionResult): void;
									zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaci {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaci>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacj extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacj>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zack extends com.google.android.gms.common.api.internal.TaskApiCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zack>;
								public doExecute(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacl extends com.google.android.gms.tasks.Continuation<java.lang.Boolean,java.lang.Void> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacl>;
								public then(param0: com.google.android.gms.tasks.Task<any>): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacm<R>  extends com.google.android.gms.common.api.TransformedResult<any> implements com.google.android.gms.common.api.ResultCallback<any>  {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacm<any>>;
								public constructor(param0: java.lang.ref.WeakReference<com.google.android.gms.common.api.GoogleApiClient>);
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public constructor();
								public onResult(param0: any): void;
								public andFinally(param0: com.google.android.gms.common.api.ResultCallbacks<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacn {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacn>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaco extends com.google.android.gms.internal.base.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaco>;
								public constructor(param0: com.google.android.gms.common.api.internal.zacm<any>, param1: globalAndroid.os.Looper);
								public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
								public handleMessage(param0: globalAndroid.os.Message): void;
								public constructor();
								public constructor(param0: globalAndroid.os.Looper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacp {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacp>;
								public static zakw: com.google.android.gms.common.api.Status;
								public constructor(param0: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>,com.google.android.gms.common.api.Api.Client>);
								public release(): void;
								public zabx(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacq extends com.google.android.gms.common.api.internal.zacs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacq>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacr extends com.google.android.gms.common.api.internal.zacs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacr>;
								public binderDied(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zacs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zac(param0: com.google.android.gms.common.api.internal.BasePendingResult<any>): void;
								});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module config {
						export abstract class GservicesValue<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.config.GservicesValue<any>>;
							public mKey: string;
							public static value(param0: string, param1: string): com.google.android.gms.common.config.GservicesValue<string>;
							/** @deprecated */
							public getBinderSafe(): T;
							public constructor(param0: string, param1: T);
							public static value(param0: string, param1: java.lang.Float): com.google.android.gms.common.config.GservicesValue<java.lang.Float>;
							public resetOverride(): void;
							public static value(param0: string, param1: java.lang.Long): com.google.android.gms.common.config.GservicesValue<java.lang.Long>;
							public static value(param0: string, param1: java.lang.Integer): com.google.android.gms.common.config.GservicesValue<java.lang.Integer>;
							public static isInitialized(): boolean;
							public static value(param0: string, param1: boolean): com.google.android.gms.common.config.GservicesValue<java.lang.Boolean>;
							public override(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export abstract class AbstractDataBuffer<T>  extends com.google.android.gms.common.data.DataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.AbstractDataBuffer<any>>;
							public mDataHolder: com.google.android.gms.common.data.DataHolder;
							public singleRefIterator(): java.util.Iterator<any>;
							public getMetadata(): globalAndroid.os.Bundle;
							public iterator(): java.util.Iterator<any>;
							/** @deprecated */
							public close(): void;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class BitmapTeleporter extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.data.BitmapTeleporter>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.BitmapTeleporter>;
							public constructor();
							public constructor(param0: globalAndroid.graphics.Bitmap);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public release(): void;
							public setTempDir(param0: java.io.File): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBuffer<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBuffer<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.DataBuffer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCount(): number;
								get(param0: number): T;
								getMetadata(): globalAndroid.os.Bundle;
								close(): void;
								isClosed(): boolean;
								iterator(): java.util.Iterator<T>;
								singleRefIterator(): java.util.Iterator<T>;
								release(): void;
								release(): void;
							});
							public constructor();
							public getMetadata(): globalAndroid.os.Bundle;
							/** @deprecated */
							public close(): void;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public singleRefIterator(): java.util.Iterator<T>;
							public getCount(): number;
							public iterator(): java.util.Iterator<T>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferIterator<T>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferIterator<any>>;
							public zalj: com.google.android.gms.common.data.DataBuffer<any>;
							public zalk: number;
							public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
							public hasNext(): boolean;
							public remove(): void;
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferObserver {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDataChanged(): void;
								onDataRangeChanged(param0: number, param1: number): void;
								onDataRangeInserted(param0: number, param1: number): void;
								onDataRangeRemoved(param0: number, param1: number): void;
								onDataRangeMoved(param0: number, param1: number, param2: number): void;
							});
							public constructor();
							public onDataRangeInserted(param0: number, param1: number): void;
							public onDataChanged(): void;
							public onDataRangeChanged(param0: number, param1: number): void;
							public onDataRangeRemoved(param0: number, param1: number): void;
							public onDataRangeMoved(param0: number, param1: number, param2: number): void;
						}
						export module DataBufferObserver {
							export class Observable {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver.Observable>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver$Observable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
									removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
								});
								public constructor();
								public removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
								public addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferObserverSet implements com.google.android.gms.common.data.DataBufferObserver, com.google.android.gms.common.data.DataBufferObserver.Observable {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserverSet>;
							public constructor();
							public addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							public removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							public hasObservers(): boolean;
							public onDataRangeInserted(param0: number, param1: number): void;
							public clear(): void;
							public onDataChanged(): void;
							public onDataRangeChanged(param0: number, param1: number): void;
							public onDataRangeRemoved(param0: number, param1: number): void;
							public onDataRangeMoved(param0: number, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferRef {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferRef>;
							public mDataHolder: com.google.android.gms.common.data.DataHolder;
							public mDataRow: number;
							public getInteger(param0: string): number;
							public hasColumn(param0: string): boolean;
							public hashCode(): number;
							public getFloat(param0: string): number;
							public parseUri(param0: string): globalAndroid.net.Uri;
							public getByteArray(param0: string): androidNative.Array<number>;
							public copyToBuffer(param0: string, param1: globalAndroid.database.CharArrayBuffer): void;
							public getDouble(param0: string): number;
							public hasNull(param0: string): boolean;
							public isDataValid(): boolean;
							public getLong(param0: string): number;
							public getString(param0: string): string;
							public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: number);
							public getDataRow(): number;
							public equals(param0: any): boolean;
							public getBoolean(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferSafeParcelable<T>  extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferSafeParcelable<any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: globalAndroid.os.Parcelable.Creator<any>);
							public getMetadata(): globalAndroid.os.Bundle;
							public iterator(): java.util.Iterator<any>;
							/** @deprecated */
							public close(): void;
							public static addValue(param0: com.google.android.gms.common.data.DataHolder.Builder, param1: com.google.android.gms.common.internal.safeparcel.SafeParcelable): void;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
							public static buildDataHolder(): com.google.android.gms.common.data.DataHolder.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferUtils {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferUtils>;
							public static KEY_NEXT_PAGE_TOKEN: string;
							public static KEY_PREV_PAGE_TOKEN: string;
							public static freezeAndClose(param0: com.google.android.gms.common.data.DataBuffer<any>): java.util.ArrayList<any>;
							public static hasData(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
							public static hasPrevPage(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
							public static hasNextPage(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataHolder extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.DataHolder>;
							public constructor();
							public getString(param0: string, param1: number, param2: number): string;
							public close(): void;
							public static empty(param0: number): com.google.android.gms.common.data.DataHolder;
							public hasColumn(param0: string): boolean;
							public hasNull(param0: string, param1: number, param2: number): boolean;
							public constructor(param0: globalAndroid.database.Cursor, param1: number, param2: globalAndroid.os.Bundle);
							public finalize(): void;
							public zaca(): void;
							public getLong(param0: string, param1: number, param2: number): number;
							public static builder(param0: androidNative.Array<string>): com.google.android.gms.common.data.DataHolder.Builder;
							public isClosed(): boolean;
							public getCount(): number;
							public getStatusCode(): number;
							public constructor(param0: androidNative.Array<string>, param1: androidNative.Array<globalAndroid.database.CursorWindow>, param2: number, param3: globalAndroid.os.Bundle);
							public getMetadata(): globalAndroid.os.Bundle;
							public getInteger(param0: string, param1: number, param2: number): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getBoolean(param0: string, param1: number, param2: number): boolean;
							public getByteArray(param0: string, param1: number, param2: number): androidNative.Array<number>;
							public getWindowIndex(param0: number): number;
						}
						export module DataHolder {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder.Builder>;
								public build(param0: number, param1: globalAndroid.os.Bundle): com.google.android.gms.common.data.DataHolder;
								public build(param0: number): com.google.android.gms.common.data.DataHolder;
								public withRow(param0: globalAndroid.content.ContentValues): com.google.android.gms.common.data.DataHolder.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export abstract class EntityBuffer<T>  extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.EntityBuffer<any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public getMetadata(): globalAndroid.os.Bundle;
							public getChildDataMarkerColumn(): string;
							public iterator(): java.util.Iterator<any>;
							public getPrimaryDataMarkerColumn(): string;
							/** @deprecated */
							public close(): void;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
							public getEntry(param0: number, param1: number): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class Freezable<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.Freezable<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.Freezable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								freeze(): T;
								isDataValid(): boolean;
							});
							public constructor();
							public isDataValid(): boolean;
							public freeze(): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class FreezableUtils {
							public static class: java.lang.Class<com.google.android.gms.common.data.FreezableUtils>;
							public constructor();
							public static freeze(param0: androidNative.Array<com.google.android.gms.common.data.Freezable<any>>): java.util.ArrayList<any>;
							public static freezeIterable(param0: java.lang.Iterable<any>): java.util.ArrayList<any>;
							public static freeze(param0: java.util.ArrayList<any>): java.util.ArrayList<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class SingleRefDataBufferIterator<T>  extends com.google.android.gms.common.data.DataBufferIterator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.SingleRefDataBufferIterator<any>>;
							public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class ImageManager {
							public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager>;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri): void;
							public loadImage(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri, param2: number): void;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: number): void;
							public loadImage(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri): void;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri, param2: number): void;
							public static create(param0: globalAndroid.content.Context): com.google.android.gms.common.images.ImageManager;
						}
						export module ImageManager {
							export class ImageReceiver {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.ImageReceiver>;
								public zace(): void;
								public onReceiveResult(param0: number, param1: globalAndroid.os.Bundle): void;
							}
							export class OnImageLoadedListener {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.OnImageLoadedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.images.ImageManager$OnImageLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
								});
								public constructor();
								public onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class Size {
							public static class: java.lang.Class<com.google.android.gms.common.images.Size>;
							public getWidth(): number;
							public getHeight(): number;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public static parseSize(param0: string): com.google.android.gms.common.images.Size;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class WebImage extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.images.WebImage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.images.WebImage>;
							public constructor();
							public getWidth(): number;
							public getHeight(): number;
							public constructor(param0: globalAndroid.net.Uri);
							public getUrl(): globalAndroid.net.Uri;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number);
							public constructor(param0: org.json.JSONObject);
							public hashCode(): number;
							public toJson(): org.json.JSONObject;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class AccountAccessor extends com.google.android.gms.common.internal.IAccountAccessor.Stub {
							public static class: java.lang.Class<com.google.android.gms.common.internal.AccountAccessor>;
							public getAccount(): globalAndroid.accounts.Account;
							public static getAccountBinderSafe(param0: com.google.android.gms.common.internal.IAccountAccessor): globalAndroid.accounts.Account;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class AccountType {
							public static class: java.lang.Class<com.google.android.gms.common.internal.AccountType>;
							public static GOOGLE: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ApiExceptionUtil {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ApiExceptionUtil>;
							public constructor();
							public static fromStatus(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class Asserts {
							public static class: java.lang.Class<com.google.android.gms.common.internal.Asserts>;
							public static checkNotNull(param0: any, param1: any): void;
							public static checkState(param0: boolean, param1: any): void;
							public static checkNotMainThread(param0: string): void;
							public static checkNull(param0: any): void;
							public static checkNotNull(param0: any): void;
							public static checkMainThread(param0: string): void;
							public static checkState(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class AuthAccountRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.AuthAccountRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.AuthAccountRequest>;
							public constructor();
							public constructor(param0: globalAndroid.accounts.Account, param1: java.util.Set<com.google.android.gms.common.api.Scope>);
							public setPolicyAction(param0: java.lang.Integer): com.google.android.gms.common.internal.AuthAccountRequest;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getAccount(): globalAndroid.accounts.Account;
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>);
							public setOauthPolicy(param0: java.lang.Integer): com.google.android.gms.common.internal.AuthAccountRequest;
							public getPolicyAction(): java.lang.Integer;
							public getOauthPolicy(): java.lang.Integer;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class BaseGmsClient<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient<any>>;
							public static CONNECT_STATE_DISCONNECTED: number;
							public static CONNECT_STATE_CONNECTED: number;
							public static CONNECT_STATE_DISCONNECTING: number;
							public static KEY_PENDING_INTENT: string;
							public static DEFAULT_ACCOUNT: string;
							public static GOOGLE_PLUS_REQUIRED_FEATURES: androidNative.Array<string>;
							public getStartServiceAction(): string;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public onConnectedLocked(param0: T): void;
							public getServiceDescriptor(): string;
							public getLooper(): globalAndroid.os.Looper;
							public onConnectionSuspended(param0: number): void;
							public checkConnected(): void;
							public onPostInitHandler(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle, param3: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public getAccount(): globalAndroid.accounts.Account;
							public createServiceInterface(param0: globalAndroid.os.IBinder): T;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public triggerConnectionSuspended(param0: number): void;
							public getSignInIntent(): globalAndroid.content.Intent;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getService(): T;
							public getLocalStartServiceAction(): string;
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public getStartServicePackage(): string;
							public getContext(): globalAndroid.content.Context;
							public requiresAccount(): boolean;
							public checkAvailabilityAndConnect(): void;
							public disconnect(): void;
							public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public triggerNotAvailable(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks, param1: number, param2: globalAndroid.app.PendingIntent): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getMinApkVersion(): number;
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public getApiFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
						export module BaseGmsClient {
							export class BaseConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$BaseConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnected(param0: globalAndroid.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
							export class BaseOnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$BaseOnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							}
							export class ConnectionProgressReportCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$ConnectionProgressReportCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
							}
							export class LegacyClientCallbackAdapter extends com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.LegacyClientCallbackAdapter>;
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>);
							}
							export class SignOutCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$SignOutCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onSignOutComplete(): void;
								});
								public constructor();
								public onSignOutComplete(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class BinderWrapper {
							public static class: java.lang.Class<com.google.android.gms.common.internal.BinderWrapper>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.BinderWrapper>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.IBinder);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ClientIdentity extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ClientIdentity>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ClientIdentity>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ClientSettings {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings>;
							public static KEY_CLIENT_SESSION_ID: string;
							public getClientSessionId(): java.lang.Integer;
							public getGravityForPopups(): number;
							public getRealClientPackageName(): string;
							public setClientSessionId(param0: java.lang.Integer): void;
							public static createDefault(param0: globalAndroid.content.Context): com.google.android.gms.common.internal.ClientSettings;
							public getViewForPopups(): globalAndroid.view.View;
							public getOptionalApiSettings(): java.util.Map<com.google.android.gms.common.api.Api<any>,com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings>;
							public getRequiredScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getRealClientClassName(): string;
							public getAccountOrDefault(): globalAndroid.accounts.Account;
							public getApplicableScopes(param0: com.google.android.gms.common.api.Api<any>): java.util.Set<com.google.android.gms.common.api.Scope>;
							/** @deprecated */
							public getAccountName(): string;
							public getAccount(): globalAndroid.accounts.Account;
							public getAllRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getSignInOptions(): com.google.android.gms.signin.SignInOptions;
							public constructor(param0: globalAndroid.accounts.Account, param1: java.util.Set<com.google.android.gms.common.api.Scope>, param2: java.util.Map<com.google.android.gms.common.api.Api<any>,com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings>, param3: number, param4: globalAndroid.view.View, param5: string, param6: string, param7: com.google.android.gms.signin.SignInOptions);
						}
						export module ClientSettings {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings.Builder>;
								public setGravityForPopups(param0: number): com.google.android.gms.common.internal.ClientSettings.Builder;
								public setRealClientClassName(param0: string): com.google.android.gms.common.internal.ClientSettings.Builder;
								public setAccount(param0: globalAndroid.accounts.Account): com.google.android.gms.common.internal.ClientSettings.Builder;
								public setSignInOptions(param0: com.google.android.gms.signin.SignInOptions): com.google.android.gms.common.internal.ClientSettings.Builder;
								public build(): com.google.android.gms.common.internal.ClientSettings;
								public setViewForPopups(param0: globalAndroid.view.View): com.google.android.gms.common.internal.ClientSettings.Builder;
								public addAllRequiredScopes(param0: java.util.Collection<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.internal.ClientSettings.Builder;
								public setOptionalApiSettingsMap(param0: java.util.Map<com.google.android.gms.common.api.Api<any>,com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings>): com.google.android.gms.common.internal.ClientSettings.Builder;
								public addRequiredScope(param0: com.google.android.gms.common.api.Scope): com.google.android.gms.common.internal.ClientSettings.Builder;
								public constructor();
								public setRealClientPackageName(param0: string): com.google.android.gms.common.internal.ClientSettings.Builder;
							}
							export class OptionalApiSettings {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings>;
								public mScopes: java.util.Set<com.google.android.gms.common.api.Scope>;
								public constructor(param0: java.util.Set<com.google.android.gms.common.api.Scope>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ConnectionErrorMessages {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ConnectionErrorMessages>;
							public static getErrorMessage(param0: globalAndroid.content.Context, param1: number): string;
							public static getAppName(param0: globalAndroid.content.Context): string;
							public static getErrorTitle(param0: globalAndroid.content.Context, param1: number): string;
							public static getDefaultNotificationChannelName(param0: globalAndroid.content.Context): string;
							public static getErrorDialogButtonMessage(param0: globalAndroid.content.Context, param1: number): string;
							public static getErrorNotificationMessage(param0: globalAndroid.content.Context, param1: number): string;
							public static getErrorNotificationTitle(param0: globalAndroid.content.Context, param1: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class Constants {
							public static class: java.lang.Class<com.google.android.gms.common.internal.Constants>;
							public static KEY_GMS_ERROR_CODE: string;
							public static KEY_NETWORK_TO_USE: string;
							public static ACTION_LOAD_IMAGE: string;
							public static EXTRA_URI: string;
							public static EXTRA_RESULT_RECEIVER: string;
							public static EXTRA_PRIORITY: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class DialogRedirect {
							public static class: java.lang.Class<com.google.android.gms.common.internal.DialogRedirect>;
							public constructor();
							public static getInstance(param0: globalAndroid.support.v4.app.Fragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.DialogRedirect;
							public redirect(): void;
							public static getInstance(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.DialogRedirect;
							public static getInstance(param0: com.google.android.gms.common.api.internal.LifecycleFragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.DialogRedirect;
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class DowngradeableSafeParcel extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.DowngradeableSafeParcel>;
							public constructor();
							public static canUnparcelSafely(param0: string): boolean;
							public setShouldDowngrade(param0: boolean): void;
							public prepareForClientVersion(param0: number): boolean;
							public static getUnparcelClientVersion(): java.lang.Integer;
							public shouldDowngrade(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class FallbackServiceBroker extends com.google.android.gms.common.internal.IGmsServiceBroker.Stub {
							public static class: java.lang.Class<com.google.android.gms.common.internal.FallbackServiceBroker>;
							public constructor();
							public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class GetServiceRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GetServiceRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.GetServiceRequest>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getExtraArgs(): globalAndroid.os.Bundle;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class GmsClient<T>  extends com.google.android.gms.common.internal.BaseGmsClient<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClient<any>>;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public validateScopes(param0: java.util.Set<com.google.android.gms.common.api.Scope>): java.util.Set<com.google.android.gms.common.api.Scope>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public getAccount(): globalAndroid.accounts.Account;
							public getClientSettings(): com.google.android.gms.common.internal.ClientSettings;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public requiresAccount(): boolean;
							public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class GmsClientEventManager {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientEventManager>;
							public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public onUnintentionalDisconnection(param0: number): void;
							public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public disableCallbacks(): void;
							public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public onConnectionSuccess(): void;
							public onConnectionFailure(param0: com.google.android.gms.common.ConnectionResult): void;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
							public constructor(param0: globalAndroid.os.Looper, param1: com.google.android.gms.common.internal.GmsClientEventManager.GmsClientEventState);
							public onConnectionSuccess(param0: globalAndroid.os.Bundle): void;
							public enableCallbacks(): void;
							public areCallbacksEnabled(): boolean;
						}
						export module GmsClientEventManager {
							export class GmsClientEventState {
								public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientEventManager.GmsClientEventState>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.GmsClientEventManager$GmsClientEventState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									isConnected(): boolean;
									getConnectionHint(): globalAndroid.os.Bundle;
								});
								public constructor();
								public getConnectionHint(): globalAndroid.os.Bundle;
								public isConnected(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class GmsClientSupervisor {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientSupervisor>;
							public constructor();
							public bindService(param0: string, param1: globalAndroid.content.ServiceConnection, param2: string): boolean;
							public unbindService(param0: globalAndroid.content.ComponentName, param1: globalAndroid.content.ServiceConnection, param2: string): void;
							public unbindService(param0: string, param1: globalAndroid.content.ServiceConnection, param2: string): void;
							public bindService(param0: globalAndroid.content.ComponentName, param1: globalAndroid.content.ServiceConnection, param2: string): boolean;
							public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.common.internal.GmsClientSupervisor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class GmsLogger {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsLogger>;
							public constructor(param0: string);
							public constructor(param0: string, param1: string);
							public wfmt(param0: string, param1: string, param2: androidNative.Array<any>): void;
							public canLogPii(): boolean;
							public canLog(param0: number): boolean;
							public efmt(param0: string, param1: string, param2: androidNative.Array<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class GoogleApiAvailabilityCache {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GoogleApiAvailabilityCache>;
							public constructor();
							public getClientAvailability(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api.Client): number;
							public constructor(param0: com.google.android.gms.common.GoogleApiAvailabilityLight);
							public flush(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class HideFirstParty {
							public static class: java.lang.Class<com.google.android.gms.common.internal.HideFirstParty>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.HideFirstParty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class IAccountAccessor {
							public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.IAccountAccessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getAccount(): globalAndroid.accounts.Account;
							});
							public constructor();
							public getAccount(): globalAndroid.accounts.Account;
						}
						export module IAccountAccessor {
							export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.IAccountAccessor {
								public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor.Stub>;
								public getAccount(): globalAndroid.accounts.Account;
								public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.IAccountAccessor;
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ICancelToken {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.ICancelToken interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								cancel(): void;
							});
							public constructor();
							public cancel(): void;
						}
						export module ICancelToken {
							export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.ICancelToken {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken.Stub>;
								public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.ICancelToken;
								public cancel(): void;
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class IGmsCallbacks {
							public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsCallbacks>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.IGmsCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
								zza(param0: number, param1: globalAndroid.os.Bundle): void;
								zza(param0: number, param1: globalAndroid.os.IBinder, param2: any /* com.google.android.gms.common.internal.zzb*/): void;
							});
							public constructor();
							public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class IGmsServiceBroker {
							public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.IGmsServiceBroker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
							});
							public constructor();
							public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
						}
						export module IGmsServiceBroker {
							export abstract class Stub implements com.google.android.gms.common.internal.IGmsServiceBroker {
								public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker.Stub>;
								public constructor();
								public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
								public asBinder(): globalAndroid.os.IBinder;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class IResolveAccountCallbacks {
							public static class: java.lang.Class<com.google.android.gms.common.internal.IResolveAccountCallbacks>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.IResolveAccountCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAccountResolutionComplete(param0: com.google.android.gms.common.internal.ResolveAccountResponse): void;
							});
							public constructor();
							public onAccountResolutionComplete(param0: com.google.android.gms.common.internal.ResolveAccountResponse): void;
						}
						export module IResolveAccountCallbacks {
							export abstract class Stub extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.internal.IResolveAccountCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.IResolveAccountCallbacks.Stub>;
								public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.IResolveAccountCallbacks;
								public onAccountResolutionComplete(param0: com.google.android.gms.common.internal.ResolveAccountResponse): void;
								public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public constructor();
								public constructor(param0: string);
							}
							export module Stub {
								export class Proxy extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.internal.IResolveAccountCallbacks {
									public static class: java.lang.Class<com.google.android.gms.common.internal.IResolveAccountCallbacks.Stub.Proxy>;
									public onAccountResolutionComplete(param0: com.google.android.gms.common.internal.ResolveAccountResponse): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ISignInButtonCreator {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ISignInButtonCreator>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.ISignInButtonCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								newSignInButton(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
								newSignInButtonFromConfig(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.common.internal.SignInButtonConfig): com.google.android.gms.dynamic.IObjectWrapper;
							});
							public constructor();
							public newSignInButtonFromConfig(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.common.internal.SignInButtonConfig): com.google.android.gms.dynamic.IObjectWrapper;
							public newSignInButton(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ImagesContract {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ImagesContract>;
							public static LOCAL: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class LegacyInternalGmsClient<T>  extends com.google.android.gms.common.internal.GmsClient<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.LegacyInternalGmsClient<any>>;
							public onConnectedLocked(param0: any): void;
							public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public onConnectionSuspended(param0: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public requiresAccount(): boolean;
							public checkAvailabilityAndConnect(): void;
							public disconnect(): void;
							public constructor(param0: globalAndroid.content.Context, param1: number, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class LibraryVersion {
							public static class: java.lang.Class<com.google.android.gms.common.internal.LibraryVersion>;
							public constructor();
							public static getInstance(): com.google.android.gms.common.internal.LibraryVersion;
							public getVersion(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class Objects {
							public static class: java.lang.Class<com.google.android.gms.common.internal.Objects>;
							public static hashCode(param0: androidNative.Array<any>): number;
							public static toStringHelper(param0: any): com.google.android.gms.common.internal.Objects.ToStringHelper;
							public static equal(param0: any, param1: any): boolean;
						}
						export module Objects {
							export class ToStringHelper {
								public static class: java.lang.Class<com.google.android.gms.common.internal.Objects.ToStringHelper>;
								public toString(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class PendingResultUtil {
							public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil>;
							public constructor();
							public static toVoidTask(param0: com.google.android.gms.common.api.PendingResult<any>): com.google.android.gms.tasks.Task<any>;
							public static toTask(param0: com.google.android.gms.common.api.PendingResult<any>, param1: com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,any>): com.google.android.gms.tasks.Task<any>;
							public static toResponseTask(param0: com.google.android.gms.common.api.PendingResult<any>, param1: com.google.android.gms.common.api.Response<any>): com.google.android.gms.tasks.Task<any>;
						}
						export module PendingResultUtil {
							export class ResultConverter<R, T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,any>>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.PendingResultUtil$ResultConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									convert(param0: R): T;
								});
								public constructor();
								public convert(param0: R): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class Preconditions {
							public static class: java.lang.Class<com.google.android.gms.common.internal.Preconditions>;
							public static checkArgument(param0: boolean): void;
							public static checkNotMainThread(param0: string): void;
							public static checkHandlerThread(param0: globalAndroid.os.Handler): void;
							public static checkNotZero(param0: number): number;
							public static checkNotEmpty(param0: string): string;
							public static checkNotNull(param0: any): any;
							public static checkState(param0: boolean): void;
							public static checkState(param0: boolean, param1: any): void;
							public static checkNotEmpty(param0: string, param1: any): string;
							public static checkNotZero(param0: number, param1: any): number;
							public static checkMainThread(param0: string): void;
							public static checkNotMainThread(): void;
							public static checkNotNull(param0: any, param1: any): any;
							public static checkState(param0: boolean, param1: string, param2: androidNative.Array<any>): void;
							public static checkArgument(param0: boolean, param1: any): void;
							public static checkArgument(param0: boolean, param1: string, param2: androidNative.Array<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ReflectedParcelable>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.ReflectedParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ResolveAccountRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ResolveAccountRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ResolveAccountRequest>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getAccount(): globalAndroid.accounts.Account;
							public getSessionId(): number;
							public constructor(param0: globalAndroid.accounts.Account, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount);
							public getSignInAccountHint(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ResolveAccountResponse extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ResolveAccountResponse>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ResolveAccountResponse>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public setSaveDefaultAccount(param0: boolean): com.google.android.gms.common.internal.ResolveAccountResponse;
							public getSaveDefaultAccount(): boolean;
							public setIsFromCrossClientAuth(param0: boolean): com.google.android.gms.common.internal.ResolveAccountResponse;
							public getAccountAccessor(): com.google.android.gms.common.internal.IAccountAccessor;
							public setAccountAccessor(param0: com.google.android.gms.common.internal.IAccountAccessor): com.google.android.gms.common.internal.ResolveAccountResponse;
							public isFromCrossClientAuth(): boolean;
							public equals(param0: any): boolean;
							public constructor(param0: com.google.android.gms.common.ConnectionResult);
							public constructor(param0: number);
							public getConnectionResult(): com.google.android.gms.common.ConnectionResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ResourceUtils {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ResourceUtils>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ServiceSpecificExtraArgs {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs>;
						}
						export module ServiceSpecificExtraArgs {
							export class CastExtraArgs {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.CastExtraArgs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$CastExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static LISTENER: string;
							}
							export class GamesExtraArgs {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.GamesExtraArgs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$GamesExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static DESIRED_LOCALE: string;
								public static SIGNIN_OPTIONS: string;
								public static GAME_PACKAGE_NAME: string;
								public static WINDOW_TOKEN: string;
							}
							export class PlusExtraArgs {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.PlusExtraArgs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$PlusExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static PLUS_AUTH_PACKAGE: string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ShowFirstParty {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ShowFirstParty>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.ShowFirstParty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class SignInButtonConfig extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.SignInButtonConfig>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.SignInButtonConfig>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getButtonSize(): number;
							public constructor(param0: number, param1: number, param2: androidNative.Array<com.google.android.gms.common.api.Scope>);
							public getColorScheme(): number;
							/** @deprecated */
							public getScopes(): androidNative.Array<com.google.android.gms.common.api.Scope>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class SignInButtonCreator extends com.google.android.gms.dynamic.RemoteCreator<com.google.android.gms.common.internal.ISignInButtonCreator> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.SignInButtonCreator>;
							public getRemoteCreator(param0: globalAndroid.os.IBinder): any;
							public static createView(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.view.View;
							public getRemoteCreator(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.ISignInButtonCreator;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class SignInButtonImpl {
							public static class: java.lang.Class<com.google.android.gms.common.internal.SignInButtonImpl>;
							public configure(param0: globalAndroid.content.res.Resources, param1: com.google.android.gms.common.internal.SignInButtonConfig): void;
							public configure(param0: globalAndroid.content.res.Resources, param1: number, param2: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class SimpleClientAdapter<T>  extends com.google.android.gms.common.internal.GmsClient<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.SimpleClientAdapter<any>>;
							public getStartServiceAction(): string;
							public getClient(): com.google.android.gms.common.api.Api.SimpleClient<any>;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public getServiceDescriptor(): string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.Api.SimpleClient<any>);
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public createServiceInterface(param0: globalAndroid.os.IBinder): any;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public onSetConnectState(param0: number, param1: any): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class StringResourceValueReader {
							public static class: java.lang.Class<com.google.android.gms.common.internal.StringResourceValueReader>;
							public getString(param0: string): string;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ViewUtils {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ViewUtils>;
							public static getXmlAttributeString(param0: string, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet, param4: boolean, param5: boolean, param6: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module constants {
							export class ListAppsActivityContract {
								public static class: java.lang.Class<com.google.android.gms.common.internal.constants.ListAppsActivityContract>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.constants.ListAppsActivityContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static EXTRA_PRESELECTED_FILTER: string;
								public static ACTION_APPS: string;
								public static PRESELECTED_FILTER_FITNESS_APPS: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export abstract class AbstractSafeParcelable extends com.google.android.gms.common.internal.safeparcel.SafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable>;
								public describeContents(): number;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelReader {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelReader>;
								public static createParcelable(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable.Creator<any>): globalAndroid.os.Parcelable;
								public static createBundle(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.os.Bundle;
								public static createStringList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<string>;
								public static createCharArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<string>;
								public static readIntegerObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Integer;
								public static readShort(param0: globalAndroid.os.Parcel, param1: number): number;
								public static readList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<any>, param3: java.lang.ClassLoader): void;
								public static createIntegerList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Integer>;
								public static createTypedList(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable.Creator<any>): java.util.ArrayList<any>;
								public static readInt(param0: globalAndroid.os.Parcel, param1: number): number;
								public static readDoubleObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Double;
								public static createParcel(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.os.Parcel;
								public static createSparseBooleanArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseBooleanArray;
								public static readLong(param0: globalAndroid.os.Parcel, param1: number): number;
								public static readByte(param0: globalAndroid.os.Parcel, param1: number): number;
								public static skipUnknownField(param0: globalAndroid.os.Parcel, param1: number): void;
								public static createDoubleArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<number>;
								public static readBoolean(param0: globalAndroid.os.Parcel, param1: number): boolean;
								public static createTypedSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable.Creator<any>): globalAndroid.util.SparseArray<any>;
								public static createParcelList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<globalAndroid.os.Parcel>;
								public static createLongArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<number>;
								public static createIBinderArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<globalAndroid.os.IBinder>;
								public static createLongList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Long>;
								public static readSize(param0: globalAndroid.os.Parcel, param1: number): number;
								public static createDoubleList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Double>;
								public static createByteArraySparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<androidNative.Array<number>>;
								public static validateObjectHeader(param0: globalAndroid.os.Parcel): number;
								public static createBigDecimalArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<java.math.BigDecimal>;
								public static createFloatList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Float>;
								public static readHeader(param0: globalAndroid.os.Parcel): number;
								public static readIBinder(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.os.IBinder;
								public static readFloatObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Float;
								public static createStringSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<string>;
								public static readBooleanObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Boolean;
								public static createBooleanList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Boolean>;
								public static createStringArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<string>;
								public static createDoubleSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<java.lang.Double>;
								public static createIBinderList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<globalAndroid.os.IBinder>;
								public static createIntArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<number>;
								public static createBigInteger(param0: globalAndroid.os.Parcel, param1: number): java.math.BigInteger;
								public static readChar(param0: globalAndroid.os.Parcel, param1: number): string;
								public static createParcelArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<globalAndroid.os.Parcel>;
								public static ensureAtEnd(param0: globalAndroid.os.Parcel, param1: number): void;
								public static getFieldId(param0: number): number;
								public static readDouble(param0: globalAndroid.os.Parcel, param1: number): number;
								public static createBigIntegerArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<java.math.BigInteger>;
								public static createIBinderSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<globalAndroid.os.IBinder>;
								public static createBigDecimal(param0: globalAndroid.os.Parcel, param1: number): java.math.BigDecimal;
								public static createTypedArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable.Creator<any>): androidNative.Array<any>;
								public static createString(param0: globalAndroid.os.Parcel, param1: number): string;
								public static createBooleanArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<boolean>;
								public static readLongObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Long;
								public static createSparseIntArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseIntArray;
								public static createFloatArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<number>;
								public static createSparseLongArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseLongArray;
								public static createByteArrayArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<androidNative.Array<number>>;
								public static createParcelSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<globalAndroid.os.Parcel>;
								public static createFloatSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<java.lang.Float>;
								public static readFloat(param0: globalAndroid.os.Parcel, param1: number): number;
								public static createByteArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<number>;
							}
							export module SafeParcelReader {
								export class ParseException {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelReader.ParseException>;
									public constructor(param0: string, param1: globalAndroid.os.Parcel);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelWriter {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelWriter>;
								public static writeByteArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<number>, param3: boolean): void;
								public static writeStringArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<string>, param3: boolean): void;
								public static writeIntArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<number>, param3: boolean): void;
								public static writeStringSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<string>, param3: boolean): void;
								public static writeSparseIntArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseIntArray, param3: boolean): void;
								public static writeDouble(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
								public static writeSparseBooleanArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseBooleanArray, param3: boolean): void;
								public static writeByteArrayArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<androidNative.Array<number>>, param3: boolean): void;
								public static writeBooleanObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Boolean, param3: boolean): void;
								public static writeLongArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<number>, param3: boolean): void;
								public static writeParcelSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<globalAndroid.os.Parcel>, param3: boolean): void;
								public static writeShort(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
								public static writeFloat(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
								public static writeBundle(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Bundle, param3: boolean): void;
								public static writeIBinder(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.IBinder, param3: boolean): void;
								public static writeSparseLongArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseLongArray, param3: boolean): void;
								public static writeChar(param0: globalAndroid.os.Parcel, param1: number, param2: string): void;
								public static writeString(param0: globalAndroid.os.Parcel, param1: number, param2: string, param3: boolean): void;
								public static writeParcel(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcel, param3: boolean): void;
								public static writeBooleanList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Boolean>, param3: boolean): void;
								public static writeIBinderArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<globalAndroid.os.IBinder>, param3: boolean): void;
								public static writeLongObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Long, param3: boolean): void;
								public static writeFloatSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<java.lang.Float>, param3: boolean): void;
								public static writeBoolean(param0: globalAndroid.os.Parcel, param1: number, param2: boolean): void;
								public static writeDoubleSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<java.lang.Double>, param3: boolean): void;
								public static writeFloatList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Float>, param3: boolean): void;
								public static writeStringList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<string>, param3: boolean): void;
								public static writeFloatObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Float, param3: boolean): void;
								public static writeBooleanArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<boolean>, param3: boolean): void;
								public static writeParcelable(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable, param3: number, param4: boolean): void;
								public static writeBigIntegerArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<java.math.BigInteger>, param3: boolean): void;
								public static writeTypedSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<any>, param3: boolean): void;
								public static writeTypedList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<any>, param3: boolean): void;
								public static writeTypedArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<globalAndroid.os.Parcelable>, param3: number, param4: boolean): void;
								public static finishObjectHeader(param0: globalAndroid.os.Parcel, param1: number): void;
								public static writeIntegerList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Integer>, param3: boolean): void;
								public static beginObjectHeader(param0: globalAndroid.os.Parcel): number;
								public static writeByte(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
								public static writeLong(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
								public static writeBigDecimalArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<java.math.BigDecimal>, param3: boolean): void;
								public static writeLongList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Long>, param3: boolean): void;
								public static writeByteArraySparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<androidNative.Array<number>>, param3: boolean): void;
								public static writeIntegerObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Integer, param3: boolean): void;
								public static writeList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<any>, param3: boolean): void;
								public static writeDoubleList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Double>, param3: boolean): void;
								public static writeBigInteger(param0: globalAndroid.os.Parcel, param1: number, param2: java.math.BigInteger, param3: boolean): void;
								public static writeDoubleObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Double, param3: boolean): void;
								public static writeParcelArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<globalAndroid.os.Parcel>, param3: boolean): void;
								public static writeFloatArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<number>, param3: boolean): void;
								public static writeIBinderList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<globalAndroid.os.IBinder>, param3: boolean): void;
								public static writeDoubleArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<number>, param3: boolean): void;
								public static writeInt(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
								public static writeCharArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<string>, param3: boolean): void;
								public static writeBigDecimal(param0: globalAndroid.os.Parcel, param1: number, param2: java.math.BigDecimal, param3: boolean): void;
								public static writeIBinderSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<globalAndroid.os.IBinder>, param3: boolean): void;
								public static writeParcelList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<globalAndroid.os.Parcel>, param3: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static NULL: string;
							}
							export module SafeParcelable {
								export class Class {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Class>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Class interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										creator(): string;
										validate(): boolean;
									});
									public constructor();
									public creator(): string;
									public validate(): boolean;
								}
								export class Constructor {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Constructor>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Constructor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
								export class Field {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Field>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Field interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										id(): number;
										getter(): string;
										type(): string;
										defaultValue(): string;
										defaultValueUnchecked(): string;
									});
									public constructor();
									public getter(): string;
									public defaultValueUnchecked(): string;
									public type(): string;
									public defaultValue(): string;
								}
								export class Indicator {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Indicator>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Indicator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getter(): string;
									});
									public constructor();
									public getter(): string;
								}
								export class Param {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Param>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Param interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										id(): number;
									});
									public constructor();
								}
								export class Reserved {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Reserved>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Reserved interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										value(): androidNative.Array<number>;
									});
									public constructor();
									public value(): androidNative.Array<number>;
								}
								export class VersionField {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.VersionField>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$VersionField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										id(): number;
										getter(): string;
										type(): string;
									});
									public constructor();
									public getter(): string;
									public type(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelableSerializer {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelableSerializer>;
								public static serializeToString(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable): string;
								public static deserializeFromString(param0: string, param1: globalAndroid.os.Parcelable.Creator<any>): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
								public static serializeToIntentExtra(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable, param1: globalAndroid.content.Intent, param2: string): void;
								public static deserializeFromIntentExtra(param0: globalAndroid.content.Intent, param1: string, param2: globalAndroid.os.Parcelable.Creator<any>): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
								public static serializeToBytes(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable): androidNative.Array<number>;
								public constructor();
								public static serializeIterableToIntentExtra(param0: java.lang.Iterable<any>, param1: globalAndroid.content.Intent, param2: string): void;
								public static deserializeIterableFromIntentExtra(param0: globalAndroid.content.Intent, param1: string, param2: globalAndroid.os.Parcelable.Creator<any>): java.util.ArrayList<any>;
								public static serializeIterableToBundle(param0: java.lang.Iterable<any>, param1: globalAndroid.os.Bundle, param2: string): void;
								public static deserializeFromBytes(param0: androidNative.Array<number>, param1: globalAndroid.os.Parcelable.Creator<any>): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
								public static deserializeIterableFromBundle(param0: globalAndroid.os.Bundle, param1: string, param2: globalAndroid.os.Parcelable.Creator<any>): java.util.ArrayList<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class Common {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.Common>;
								public static CLIENT_KEY: com.google.android.gms.common.api.Api.ClientKey<com.google.android.gms.common.internal.service.zai>;
								public static zaph: com.google.android.gms.common.internal.service.zac;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module logging {
						export class Logger {
							public static class: java.lang.Class<com.google.android.gms.common.logging.Logger>;
							public isLoggable(param0: number): boolean;
							public constructor(param0: string, param1: androidNative.Array<string>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module providers {
						export class PooledExecutorsProvider {
							public static class: java.lang.Class<com.google.android.gms.common.providers.PooledExecutorsProvider>;
							public static getInstance(): com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory;
						}
						export module PooledExecutorsProvider {
							export class PooledExecutorFactory {
								public static class: java.lang.Class<com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.providers.PooledExecutorsProvider$PooledExecutorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
								});
								public constructor();
								public newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export class FavaDiagnosticsEntity extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.server.FavaDiagnosticsEntity>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.FavaDiagnosticsEntity>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: string, param2: number);
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module converter {
							export class StringToIntConverter extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<string,java.lang.Integer>  {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.StringToIntConverter>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter>;
								public convert(param0: any): any;
								public zacj(): number;
								public zack(): number;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public convertBack(param0: any): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export abstract class FastJsonResponse {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse>;
								public toString(): string;
								public setIntegerInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public constructor();
								public addConcreteTypeInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: com.google.android.gms.common.server.response.FastJsonResponse): void;
								public getFieldMappings(): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
								public setDecodedBytesInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: androidNative.Array<number>): void;
								public setStringsInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<string>): void;
								public isPrimitiveFieldSet(param0: string): boolean;
								public addConcreteTypeArrayInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public isFieldSet(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>): boolean;
								public getValueObject(param0: string): any;
								public setLongInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public setBooleanInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: boolean): void;
								public getFieldValue(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>): any;
								public setStringInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: string): void;
							}
							export module FastJsonResponse {
								export class Field<I, O>  extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
									public zapq: number;
									public zapr: boolean;
									public zaps: number;
									public zapt: boolean;
									public zapu: string;
									public zapv: number;
									public zapw: java.lang.Class<any>;
									public static CREATOR: com.google.android.gms.common.server.response.zai;
									public zacp(): com.google.android.gms.common.server.response.FastJsonResponse;
									public convertBack(param0: any): any;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public static forConcreteTypeArray(param0: string, param1: number, param2: java.lang.Class<any>): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public static forBoolean(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Boolean,java.lang.Boolean>;
									public toString(): string;
									public convert(param0: any): any;
									public static forLong(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Long,java.lang.Long>;
									public static forStrings(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.util.ArrayList<string>,java.util.ArrayList<string>>;
									public static forFloat(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Float,java.lang.Float>;
									public zacl(): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public getSafeParcelableFieldId(): number;
									public static forString(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<string,string>;
									public static forDouble(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Double,java.lang.Double>;
									public zacq(): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
									public static forBase64(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<androidNative.Array<number>,androidNative.Array<number>>;
									public static forConcreteType(param0: string, param1: number, param2: java.lang.Class<any>): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public static forInteger(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Integer,java.lang.Integer>;
									public static withConverter(param0: string, param1: number, param2: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>, param3: boolean): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public zacn(): boolean;
								}
								export class FieldConverter<I, O>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.server.response.FastJsonResponse$FieldConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										zacj(): number;
										zack(): number;
										convert(param0: I): O;
										convertBack(param0: O): I;
									});
									public constructor();
									public zack(): number;
									public convertBack(param0: O): I;
									public zacj(): number;
									public convert(param0: I): O;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class FastParser<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser<any>>;
								public constructor();
								public parse(param0: java.io.InputStream, param1: T): void;
							}
							export module FastParser {
								export class ParseException {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser.ParseException>;
									public constructor(param0: java.lang.Throwable);
									public constructor(param0: string);
									public constructor(param0: string, param1: java.lang.Throwable);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export abstract class FastSafeParcelableJsonResponse extends com.google.android.gms.common.server.response.FastJsonResponse implements com.google.android.gms.common.internal.safeparcel.SafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.FastSafeParcelableJsonResponse>;
								public describeContents(): number;
								public isPrimitiveFieldSet(param0: string): boolean;
								public equals(param0: any): boolean;
								public toByteArray(): androidNative.Array<number>;
								public getValueObject(param0: string): any;
								public constructor();
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class SafeParcelResponse extends com.google.android.gms.common.server.response.FastSafeParcelableJsonResponse {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.SafeParcelResponse>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.SafeParcelResponse>;
								public toString(): string;
								public constructor(param0: com.google.android.gms.common.server.response.zak, param1: string);
								public setIntegerInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public static from(param0: com.google.android.gms.common.server.response.FastJsonResponse): com.google.android.gms.common.server.response.SafeParcelResponse;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public addConcreteTypeInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: com.google.android.gms.common.server.response.FastJsonResponse): void;
								public getFieldMappings(): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
								public setDecodedBytesInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: androidNative.Array<number>): void;
								public setStringsInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<string>): void;
								public isPrimitiveFieldSet(param0: string): boolean;
								public addConcreteTypeArrayInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public getValueObject(param0: string): any;
								public setLongInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public setBooleanInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: boolean): void;
								public setStringInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module sqlite {
						export class CursorWrapper {
							public static class: java.lang.Class<com.google.android.gms.common.sqlite.CursorWrapper>;
							public setWindow(param0: globalAndroid.database.CursorWindow): void;
							public getWindow(): globalAndroid.database.CursorWindow;
							public constructor(param0: globalAndroid.database.Cursor);
							public fillWindow(param0: number, param1: globalAndroid.database.CursorWindow): void;
							public onMove(param0: number, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class ConnectionTracker {
							public static class: java.lang.Class<com.google.android.gms.common.stats.ConnectionTracker>;
							public static getInstance(): com.google.android.gms.common.stats.ConnectionTracker;
							public bindService(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: globalAndroid.content.ServiceConnection, param3: number): boolean;
							public unbindService(param0: globalAndroid.content.Context, param1: globalAndroid.content.ServiceConnection): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class LoggingConstants {
							public static class: java.lang.Class<com.google.android.gms.common.stats.LoggingConstants>;
							public static EXTRA_WAKE_LOCK_KEY: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export abstract class StatsEvent extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.stats.StatsEvent>;
							public constructor();
							public toString(): string;
							public getEventType(): number;
							public getTimeMillis(): number;
						}
						export module StatsEvent {
							export class Types {
								public static class: java.lang.Class<com.google.android.gms.common.stats.StatsEvent.Types>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.stats.StatsEvent$Types interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static EVENT_TYPE_RELEASE_WAKE_LOCK: number;
								public static EVENT_TYPE_ACQUIRE_WAKE_LOCK: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class StatsUtils {
							public static class: java.lang.Class<com.google.android.gms.common.stats.StatsUtils>;
							public constructor();
							public static getEventKey(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): string;
							public static getEventKey(param0: globalAndroid.os.PowerManager.WakeLock, param1: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class WakeLockEvent extends com.google.android.gms.common.stats.StatsEvent {
							public static class: java.lang.Class<com.google.android.gms.common.stats.WakeLockEvent>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.stats.WakeLockEvent>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: string, param3: number, param4: java.util.List<string>, param5: string, param6: number, param7: number, param8: string, param9: string, param10: number, param11: number, param12: string);
							public getEventType(): number;
							public getTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class WakeLockTracker {
							public static class: java.lang.Class<com.google.android.gms.common.stats.WakeLockTracker>;
							public constructor();
							public registerReleaseEvent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							public registerEvent(param0: globalAndroid.content.Context, param1: string, param2: number, param3: string, param4: string, param5: string, param6: number, param7: java.util.List<string>): void;
							public registerAcquireEvent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: string, param3: string, param4: string, param5: number, param6: string): void;
							public registerEvent(param0: globalAndroid.content.Context, param1: string, param2: number, param3: string, param4: string, param5: string, param6: number, param7: java.util.List<string>, param8: number): void;
							public static getInstance(): com.google.android.gms.common.stats.WakeLockTracker;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class AndroidUtilsLight {
							public static class: java.lang.Class<com.google.android.gms.common.util.AndroidUtilsLight>;
							public constructor();
							public static getPackageCertificateHashBytes(param0: globalAndroid.content.Context, param1: string): androidNative.Array<number>;
							public static getDeviceProtectedStorageContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class ArrayUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.ArrayUtils>;
							public static contains(param0: androidNative.Array<number>, param1: number): boolean;
							public static toArrayList(param0: androidNative.Array<any>): java.util.ArrayList<any>;
							public static writeArray(param0: java.lang.StringBuilder, param1: androidNative.Array<boolean>): void;
							public static contains(param0: androidNative.Array<any>, param1: any): boolean;
							public static writeArray(param0: java.lang.StringBuilder, param1: androidNative.Array<number>): void;
							public static toPrimitiveArray(param0: java.util.Collection<java.lang.Integer>): androidNative.Array<number>;
							public static concat(param0: androidNative.Array<androidNative.Array<any>>): androidNative.Array<any>;
							public static concatByteArrays(param0: androidNative.Array<androidNative.Array<number>>): androidNative.Array<number>;
							public static writeArray(param0: java.lang.StringBuilder, param1: androidNative.Array<any>): void;
							public static removeAll(param0: androidNative.Array<any>, param1: androidNative.Array<any>): androidNative.Array<any>;
							public static newArrayList(): java.util.ArrayList<any>;
							public static toWrapperArray(param0: androidNative.Array<number>): androidNative.Array<java.lang.Integer>;
							public static writeStringArray(param0: java.lang.StringBuilder, param1: androidNative.Array<string>): void;
							public static appendToArray(param0: androidNative.Array<any>, param1: any): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Base64Utils {
							public static class: java.lang.Class<com.google.android.gms.common.util.Base64Utils>;
							public constructor();
							public static encodeUrlSafe(param0: androidNative.Array<number>): string;
							public static encode(param0: androidNative.Array<number>): string;
							public static encodeUrlSafeNoPadding(param0: androidNative.Array<number>): string;
							public static decodeUrlSafeNoPadding(param0: string): androidNative.Array<number>;
							public static decodeUrlSafe(param0: string): androidNative.Array<number>;
							public static decode(param0: string): androidNative.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class BiConsumer<T, U>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.BiConsumer<any,any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.BiConsumer<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								accept(param0: T, param1: U): void;
							});
							public constructor();
							public accept(param0: T, param1: U): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class ClientLibraryUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.ClientLibraryUtils>;
							public static getClientVersion(param0: globalAndroid.content.Context, param1: string): number;
							public static isPackageSide(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Clock {
							public static class: java.lang.Class<com.google.android.gms.common.util.Clock>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								currentTimeMillis(): number;
								elapsedRealtime(): number;
								nanoTime(): number;
								currentThreadTimeMillis(): number;
							});
							public constructor();
							public currentThreadTimeMillis(): number;
							public nanoTime(): number;
							public elapsedRealtime(): number;
							public currentTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class CollectionUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.CollectionUtils>;
							public static mutableSetOfWithSize(param0: number): java.util.Set<any>;
							/** @deprecated */
							public static listOf(param0: androidNative.Array<any>): java.util.List<any>;
							/** @deprecated */
							public static setOf(param0: androidNative.Array<any>): java.util.Set<any>;
							public static mapOf(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Map<any,any>;
							public static isEmpty(param0: java.util.Collection<any>): boolean;
							/** @deprecated */
							public static setOf(param0: any, param1: any, param2: any): java.util.Set<any>;
							/** @deprecated */
							public static listOf(): java.util.List<any>;
							public static mapOf(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): java.util.Map<any,any>;
							/** @deprecated */
							public static listOf(param0: any): java.util.List<any>;
							public static mapOfKeyValueArrays(param0: androidNative.Array<any>, param1: androidNative.Array<any>): java.util.Map<any,any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class CrashUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.CrashUtils>;
							public constructor();
							public static addDynamiteErrorToDropBox(param0: globalAndroid.content.Context, param1: java.lang.Throwable): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DataUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.DataUtils>;
							public constructor();
							public static copyStringToBuffer(param0: string, param1: globalAndroid.database.CharArrayBuffer): void;
							public static loadImageBytes(param0: globalAndroid.graphics.Bitmap): androidNative.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DefaultClock extends com.google.android.gms.common.util.Clock {
							public static class: java.lang.Class<com.google.android.gms.common.util.DefaultClock>;
							public currentThreadTimeMillis(): number;
							public nanoTime(): number;
							public elapsedRealtime(): number;
							public currentTimeMillis(): number;
							public static getInstance(): com.google.android.gms.common.util.Clock;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DeviceProperties {
							public static class: java.lang.Class<com.google.android.gms.common.util.DeviceProperties>;
							public static isTablet(param0: globalAndroid.content.res.Resources): boolean;
							public static isTv(param0: globalAndroid.content.Context): boolean;
							public static isLatchsky(param0: globalAndroid.content.Context): boolean;
							public static isWearable(param0: globalAndroid.content.Context): boolean;
							public static isUserBuild(): boolean;
							public static isWearableWithoutPlayStore(param0: globalAndroid.content.Context): boolean;
							public static isSidewinder(param0: globalAndroid.content.Context): boolean;
							public static isAuto(param0: globalAndroid.content.Context): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DynamiteApi {
							public static class: java.lang.Class<com.google.android.gms.common.util.DynamiteApi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.DynamiteApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class GmsVersion {
							public static class: java.lang.Class<com.google.android.gms.common.util.GmsVersion>;
							public static VERSION_HALLOUMI: number;
							public static VERSION_JARLSBERG: number;
							public static VERSION_KENAFA: number;
							public static VERSION_LONGHORN: number;
							public static VERSION_MANCHEGO: number;
							public static VERSION_ORLA: number;
							public static VERSION_PARMESAN: number;
							public static VERSION_QUESO: number;
							public static VERSION_REBLOCHON: number;
							public static VERSION_SAGA: number;
							public static isAtLeastFenacho(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class HexDumpUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.HexDumpUtils>;
							public constructor();
							public static dump(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class HttpUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.HttpUtils>;
							public static parse(param0: java.net.URI, param1: string): java.util.Map<string,string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class IOUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.IOUtils>;
							public static toByteArray(param0: java.io.InputStream): androidNative.Array<number>;
							public static closeQuietly(param0: globalAndroid.os.ParcelFileDescriptor): void;
							public static isGzipByteBuffer(param0: androidNative.Array<number>): boolean;
							public static copyStream(param0: java.io.InputStream, param1: java.io.OutputStream, param2: boolean, param3: number): number;
							public static closeQuietly(param0: java.io.Closeable): void;
							public static readInputStreamFully(param0: java.io.InputStream, param1: boolean): androidNative.Array<number>;
							public static readInputStreamFully(param0: java.io.InputStream): androidNative.Array<number>;
							public static copyStream(param0: java.io.InputStream, param1: java.io.OutputStream): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class JsonUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.JsonUtils>;
							public static escapeString(param0: string): string;
							public static areJsonValuesEquivalent(param0: any, param1: any): boolean;
							public static unescapeString(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class MapUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.MapUtils>;
							public constructor();
							public static writeStringMapToJson(param0: java.lang.StringBuilder, param1: java.util.HashMap<string,string>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class MurmurHash3 {
							public static class: java.lang.Class<com.google.android.gms.common.util.MurmurHash3>;
							public static murmurhash3_x86_32(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class NumberUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.NumberUtils>;
							public static parseHexLong(param0: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class PlatformVersion {
							public static class: java.lang.Class<com.google.android.gms.common.util.PlatformVersion>;
							public static isAtLeastJellyBean(): boolean;
							public static isAtLeastLollipop(): boolean;
							public static isAtLeastN(): boolean;
							public static isAtLeastO(): boolean;
							public static isAtLeastJellyBeanMR1(): boolean;
							public static isAtLeastHoneycombMR1(): boolean;
							public static isAtLeastHoneycomb(): boolean;
							public static isAtLeastJellyBeanMR2(): boolean;
							public static isAtLeastP(): boolean;
							public static isAtLeastLollipopMR1(): boolean;
							public static isAtLeastM(): boolean;
							public static isAtLeastIceCreamSandwich(): boolean;
							public static isAtLeastKitKatWatch(): boolean;
							public static isAtLeastKitKat(): boolean;
							public static isAtLeastIceCreamSandwichMR1(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Predicate<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.Predicate<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: T): boolean;
							});
							public constructor();
							public apply(param0: T): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class ProcessUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.ProcessUtils>;
							public static getMyProcessName(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class RetainForClient {
							public static class: java.lang.Class<com.google.android.gms.common.util.RetainForClient>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.RetainForClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class ScopeUtil {
							public static class: java.lang.Class<com.google.android.gms.common.util.ScopeUtil>;
							public static toScopeString(param0: java.util.Set<com.google.android.gms.common.api.Scope>): androidNative.Array<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class SharedPreferencesUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.SharedPreferencesUtils>;
							/** @deprecated */
							public static publishWorldReadableSharedPreferences(param0: globalAndroid.content.Context, param1: globalAndroid.content.SharedPreferences.Editor, param2: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Strings {
							public static class: java.lang.Class<com.google.android.gms.common.util.Strings>;
							public static isEmptyOrWhitespace(param0: string): boolean;
							public static emptyToNull(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class UidVerifier {
							public static class: java.lang.Class<com.google.android.gms.common.util.UidVerifier>;
							public static isGooglePlayServicesUid(param0: globalAndroid.content.Context, param1: number): boolean;
							public static uidHasPackageName(param0: globalAndroid.content.Context, param1: number, param2: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class VisibleForTesting {
							public static class: java.lang.Class<com.google.android.gms.common.util.VisibleForTesting>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.VisibleForTesting interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class WorkSourceUtil {
							public static class: java.lang.Class<com.google.android.gms.common.util.WorkSourceUtil>;
							public static fromPackage(param0: globalAndroid.content.Context, param1: string): globalAndroid.os.WorkSource;
							public static hasWorkSourcePermission(param0: globalAndroid.content.Context): boolean;
							public static getNames(param0: globalAndroid.os.WorkSource): java.util.List<string>;
							public static fromPackageAndModuleExperimentalPi(param0: globalAndroid.content.Context, param1: string, param2: string): globalAndroid.os.WorkSource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export module concurrent {
							export class HandlerExecutor {
								public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.HandlerExecutor>;
								public execute(param0: java.lang.Runnable): void;
								public constructor(param0: globalAndroid.os.Looper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export module concurrent {
							export class NamedThreadFactory {
								public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.NamedThreadFactory>;
								public constructor(param0: string);
								public newThread(param0: java.lang.Runnable): java.lang.Thread;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export module concurrent {
							export class NumberedThreadFactory {
								public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.NumberedThreadFactory>;
								public constructor(param0: string);
								public newThread(param0: java.lang.Runnable): java.lang.Thread;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module wrappers {
						export class InstantApps {
							public static class: java.lang.Class<com.google.android.gms.common.wrappers.InstantApps>;
							public constructor();
							public static isInstantApp(param0: globalAndroid.content.Context): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module wrappers {
						export class PackageManagerWrapper {
							public static class: java.lang.Class<com.google.android.gms.common.wrappers.PackageManagerWrapper>;
							public checkCallingOrSelfPermission(param0: string): number;
							public checkPermission(param0: string, param1: string): number;
							public getApplicationInfo(param0: string, param1: number): globalAndroid.content.pm.ApplicationInfo;
							public isCallerInstantApp(): boolean;
							public getPackagesForUid(param0: number): androidNative.Array<string>;
							public constructor(param0: globalAndroid.content.Context);
							public getPackageInfo(param0: string, param1: number): globalAndroid.content.pm.PackageInfo;
							public getApplicationLabel(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module wrappers {
						export class Wrappers {
							public static class: java.lang.Class<com.google.android.gms.common.wrappers.Wrappers>;
							public constructor();
							public static packageManager(param0: globalAndroid.content.Context): com.google.android.gms.common.wrappers.PackageManagerWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export abstract class DeferredLifecycleHelper<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.DeferredLifecycleHelper<any>>;
						public constructor();
						public onResume(): void;
						public createDelegate(param0: com.google.android.gms.dynamic.OnDelegateCreatedListener<T>): void;
						public handleGooglePlayUnavailable(param0: globalAndroid.widget.FrameLayout): void;
						public onStop(): void;
						public onLowMemory(): void;
						public onPause(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public static showGooglePlayUnavailableMessage(param0: globalAndroid.widget.FrameLayout): void;
						public onStart(): void;
						public getDelegate(): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class FragmentWrapper extends com.google.android.gms.dynamic.IFragmentWrapper.Stub {
						public static class: java.lang.Class<com.google.android.gms.dynamic.FragmentWrapper>;
						public static wrap(param0: globalAndroid.app.Fragment): com.google.android.gms.dynamic.FragmentWrapper;
						public setRetainInstance(param0: boolean): void;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
						public isRemoving(): boolean;
						public setHasOptionsMenu(param0: boolean): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public getId(): number;
						public isInLayout(): boolean;
						public getArguments(): globalAndroid.os.Bundle;
						public isHidden(): boolean;
						public startActivity(param0: globalAndroid.content.Intent): void;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public isDetached(): boolean;
						public setUserVisibleHint(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class IFragmentWrapper {
						public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.IFragmentWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzad(): com.google.android.gms.dynamic.IObjectWrapper;
							getArguments(): globalAndroid.os.Bundle;
							getId(): number;
							zzae(): com.google.android.gms.dynamic.IFragmentWrapper;
							zzaf(): com.google.android.gms.dynamic.IObjectWrapper;
							getRetainInstance(): boolean;
							getTag(): string;
							zzag(): com.google.android.gms.dynamic.IFragmentWrapper;
							getTargetRequestCode(): number;
							getUserVisibleHint(): boolean;
							zzah(): com.google.android.gms.dynamic.IObjectWrapper;
							isAdded(): boolean;
							isDetached(): boolean;
							isHidden(): boolean;
							isInLayout(): boolean;
							isRemoving(): boolean;
							isResumed(): boolean;
							isVisible(): boolean;
							zza(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							setHasOptionsMenu(param0: boolean): void;
							setMenuVisibility(param0: boolean): void;
							setRetainInstance(param0: boolean): void;
							setUserVisibleHint(param0: boolean): void;
							startActivity(param0: globalAndroid.content.Intent): void;
							startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
							zzb(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
						});
						public constructor();
						public setRetainInstance(param0: boolean): void;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
						public isRemoving(): boolean;
						public setHasOptionsMenu(param0: boolean): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public getId(): number;
						public isInLayout(): boolean;
						public getArguments(): globalAndroid.os.Bundle;
						public isHidden(): boolean;
						public startActivity(param0: globalAndroid.content.Intent): void;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public isDetached(): boolean;
						public setUserVisibleHint(param0: boolean): void;
					}
					export module IFragmentWrapper {
						export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.dynamic.IFragmentWrapper {
							public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper.Stub>;
							public constructor();
							public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.dynamic.IFragmentWrapper;
							public isResumed(): boolean;
							public isAdded(): boolean;
							public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
							public isVisible(): boolean;
							public isDetached(): boolean;
							public isRemoving(): boolean;
							public getTag(): string;
							public startActivity(param0: globalAndroid.content.Intent): void;
							public setRetainInstance(param0: boolean): void;
							public setUserVisibleHint(param0: boolean): void;
							public getArguments(): globalAndroid.os.Bundle;
							public isHidden(): boolean;
							public getRetainInstance(): boolean;
							public getUserVisibleHint(): boolean;
							public constructor(param0: string);
							public setHasOptionsMenu(param0: boolean): void;
							public setMenuVisibility(param0: boolean): void;
							public getId(): number;
							public getTargetRequestCode(): number;
							public isInLayout(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class IObjectWrapper {
						public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.IObjectWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export module IObjectWrapper {
						export class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.dynamic.IObjectWrapper {
							public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper.Stub>;
							public constructor();
							public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.dynamic.IObjectWrapper;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class LifecycleDelegate {
						public static class: java.lang.Class<com.google.android.gms.dynamic.LifecycleDelegate>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.LifecycleDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
							onCreate(param0: globalAndroid.os.Bundle): void;
							onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							onStart(): void;
							onResume(): void;
							onPause(): void;
							onStop(): void;
							onDestroyView(): void;
							onDestroy(): void;
							onLowMemory(): void;
							onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onResume(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStop(): void;
						public onLowMemory(): void;
						public onStart(): void;
						public onPause(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class ObjectWrapper<T>  extends com.google.android.gms.dynamic.IObjectWrapper.Stub {
						public static class: java.lang.Class<com.google.android.gms.dynamic.ObjectWrapper<any>>;
						public static unwrap(param0: com.google.android.gms.dynamic.IObjectWrapper): any;
						public static wrap(param0: any): com.google.android.gms.dynamic.IObjectWrapper;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class OnDelegateCreatedListener<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.OnDelegateCreatedListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.OnDelegateCreatedListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDelegateCreated(param0: T): void;
						});
						public constructor();
						public onDelegateCreated(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export abstract class RemoteCreator<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.RemoteCreator<any>>;
						public getRemoteCreator(param0: globalAndroid.os.IBinder): T;
						public getRemoteCreatorInstance(param0: globalAndroid.content.Context): T;
						public constructor(param0: string);
					}
					export module RemoteCreator {
						export class RemoteCreatorException {
							public static class: java.lang.Class<com.google.android.gms.dynamic.RemoteCreator.RemoteCreatorException>;
							public constructor(param0: string);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class SupportFragmentWrapper extends com.google.android.gms.dynamic.IFragmentWrapper.Stub {
						public static class: java.lang.Class<com.google.android.gms.dynamic.SupportFragmentWrapper>;
						public setRetainInstance(param0: boolean): void;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
						public isRemoving(): boolean;
						public setHasOptionsMenu(param0: boolean): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public getId(): number;
						public isInLayout(): boolean;
						public getArguments(): globalAndroid.os.Bundle;
						public isHidden(): boolean;
						public startActivity(param0: globalAndroid.content.Intent): void;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public isDetached(): boolean;
						public static wrap(param0: globalAndroid.support.v4.app.Fragment): com.google.android.gms.dynamic.SupportFragmentWrapper;
						public setUserVisibleHint(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class DynamiteModule {
						public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule>;
						public static PREFER_REMOTE: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static PREFER_HIGHEST_OR_LOCAL_VERSION: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static PREFER_HIGHEST_OR_LOCAL_VERSION_NO_FORCE_STAGING: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static PREFER_HIGHEST_OR_REMOTE_VERSION: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static getRemoteVersion(param0: globalAndroid.content.Context, param1: string): number;
						public static getLocalVersion(param0: globalAndroid.content.Context, param1: string): number;
						public getModuleContext(): globalAndroid.content.Context;
						public instantiate(param0: string): globalAndroid.os.IBinder;
						public static load(param0: globalAndroid.content.Context, param1: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy, param2: string): com.google.android.gms.dynamite.DynamiteModule;
					}
					export module DynamiteModule {
						export class DynamiteLoaderClassLoader {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.DynamiteLoaderClassLoader>;
							public static sClassLoader: java.lang.ClassLoader;
							public constructor();
						}
						export class LoadingException {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.LoadingException>;
						}
						export class VersionPolicy {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy>;
							/**
							 * Constructs a new instance of the com.google.android.gms.dynamite.DynamiteModule$VersionPolicy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: globalAndroid.content.Context, param1: string, param2: any /* com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza*/): any /* com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zzb*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class BleApi {
						public static class: java.lang.Class<com.google.android.gms.fitness.BleApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.fitness.BleApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							startBleScan(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.StartBleScanRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							stopBleScan(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.BleScanCallback): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							claimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.BleDevice): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							claimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							unclaimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							unclaimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.BleDevice): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							listClaimedBleDevices(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.BleDevicesResult>;
						});
						public constructor();
						public claimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.BleDevice): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						/** @deprecated */
						public startBleScan(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.StartBleScanRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public unclaimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public unclaimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.BleDevice): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public claimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public listClaimedBleDevices(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.BleDevicesResult>;
						public stopBleScan(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.BleScanCallback): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class BleClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.fitness.FitnessOptions> {
						public static class: java.lang.Class<com.google.android.gms.fitness.BleClient>;
						public claimBleDevice(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
						public unclaimBleDevice(param0: com.google.android.gms.fitness.data.BleDevice): com.google.android.gms.tasks.Task<java.lang.Void>;
						public stopBleScan(param0: com.google.android.gms.fitness.request.BleScanCallback): com.google.android.gms.tasks.Task<java.lang.Boolean>;
						public claimBleDevice(param0: com.google.android.gms.fitness.data.BleDevice): com.google.android.gms.tasks.Task<java.lang.Void>;
						public unclaimBleDevice(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
						public startBleScan(param0: java.util.List<com.google.android.gms.fitness.data.DataType>, param1: number, param2: com.google.android.gms.fitness.request.BleScanCallback): com.google.android.gms.tasks.Task<java.lang.Void>;
						public listClaimedBleDevices(): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.fitness.data.BleDevice>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class ConfigApi {
						public static class: java.lang.Class<com.google.android.gms.fitness.ConfigApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.fitness.ConfigApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createCustomDataType(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataTypeCreateRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DataTypeResult>;
							readDataType(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DataTypeResult>;
							disableFit(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
						public readDataType(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DataTypeResult>;
						public disableFit(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public createCustomDataType(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataTypeCreateRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DataTypeResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class ConfigClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.fitness.FitnessOptions> {
						public static class: java.lang.Class<com.google.android.gms.fitness.ConfigClient>;
						public disableFit(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public readDataType(param0: string): com.google.android.gms.tasks.Task<com.google.android.gms.fitness.data.DataType>;
						public createCustomDataType(param0: com.google.android.gms.fitness.request.DataTypeCreateRequest): com.google.android.gms.tasks.Task<com.google.android.gms.fitness.data.DataType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class Fitness {
						public static class: java.lang.Class<com.google.android.gms.fitness.Fitness>;
						public static SENSORS_API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
						public static SensorsApi: com.google.android.gms.fitness.SensorsApi;
						public static RECORDING_API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
						public static RecordingApi: com.google.android.gms.fitness.RecordingApi;
						public static SESSIONS_API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
						public static SessionsApi: com.google.android.gms.fitness.SessionsApi;
						public static HISTORY_API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
						public static HistoryApi: com.google.android.gms.fitness.HistoryApi;
						public static GOALS_API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
						public static GoalsApi: com.google.android.gms.fitness.GoalsApi;
						public static CONFIG_API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
						public static ConfigApi: com.google.android.gms.fitness.ConfigApi;
						public static BLE_API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
						public static BleApi: com.google.android.gms.fitness.BleApi;
						public static SCOPE_ACTIVITY_READ: com.google.android.gms.common.api.Scope;
						public static SCOPE_ACTIVITY_READ_WRITE: com.google.android.gms.common.api.Scope;
						public static SCOPE_LOCATION_READ: com.google.android.gms.common.api.Scope;
						public static SCOPE_LOCATION_READ_WRITE: com.google.android.gms.common.api.Scope;
						public static SCOPE_BODY_READ: com.google.android.gms.common.api.Scope;
						public static SCOPE_BODY_READ_WRITE: com.google.android.gms.common.api.Scope;
						public static SCOPE_NUTRITION_READ: com.google.android.gms.common.api.Scope;
						public static SCOPE_NUTRITION_READ_WRITE: com.google.android.gms.common.api.Scope;
						public static ACTION_TRACK: string;
						public static ACTION_VIEW: string;
						public static ACTION_VIEW_GOAL: string;
						public static EXTRA_START_TIME: string;
						public static EXTRA_END_TIME: string;
						public static getSessionsClient(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.SessionsClient;
						public static getSensorsClient(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.SensorsClient;
						public static getGoalsClient(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.GoalsClient;
						public static getBleClient(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.BleClient;
						public static getHistoryClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.HistoryClient;
						public static getConfigClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.ConfigClient;
						public static getRecordingClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.RecordingClient;
						public static getConfigClient(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.ConfigClient;
						public static getBleClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.BleClient;
						public static getHistoryClient(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.HistoryClient;
						public static getStartTime(param0: globalAndroid.content.Intent, param1: java.util.concurrent.TimeUnit): number;
						public static getSessionsClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.SessionsClient;
						public static getGoalsClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.GoalsClient;
						public static getEndTime(param0: globalAndroid.content.Intent, param1: java.util.concurrent.TimeUnit): number;
						public static getSensorsClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.SensorsClient;
						public static getRecordingClient(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): com.google.android.gms.fitness.RecordingClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class FitnessActivities {
						public static class: java.lang.Class<com.google.android.gms.fitness.FitnessActivities>;
						public static MIME_TYPE_PREFIX: string;
						public static EXTRA_STATUS: string;
						public static STATUS_ACTIVE: string;
						public static STATUS_COMPLETED: string;
						public static AEROBICS: string;
						public static ARCHERY: string;
						public static BADMINTON: string;
						public static BASEBALL: string;
						public static BASKETBALL: string;
						public static BIATHLON: string;
						public static BIKING: string;
						public static BIKING_HAND: string;
						public static BIKING_MOUNTAIN: string;
						public static BIKING_ROAD: string;
						public static BIKING_SPINNING: string;
						public static BIKING_STATIONARY: string;
						public static BIKING_UTILITY: string;
						public static BOXING: string;
						public static CALISTHENICS: string;
						public static CIRCUIT_TRAINING: string;
						public static CRICKET: string;
						public static CROSSFIT: string;
						public static CURLING: string;
						public static DANCING: string;
						public static DIVING: string;
						public static ELEVATOR: string;
						public static ELLIPTICAL: string;
						public static ERGOMETER: string;
						public static ESCALATOR: string;
						public static FENCING: string;
						public static FOOTBALL_AMERICAN: string;
						public static FOOTBALL_AUSTRALIAN: string;
						public static FOOTBALL_SOCCER: string;
						public static FRISBEE_DISC: string;
						public static GARDENING: string;
						public static GOLF: string;
						public static GYMNASTICS: string;
						public static HANDBALL: string;
						public static HIGH_INTENSITY_INTERVAL_TRAINING: string;
						public static HIKING: string;
						public static HOCKEY: string;
						public static HORSEBACK_RIDING: string;
						public static HOUSEWORK: string;
						public static ICE_SKATING: string;
						public static IN_VEHICLE: string;
						public static INTERVAL_TRAINING: string;
						public static JUMP_ROPE: string;
						public static KAYAKING: string;
						public static KETTLEBELL_TRAINING: string;
						public static KICK_SCOOTER: string;
						public static KICKBOXING: string;
						public static KITESURFING: string;
						public static MARTIAL_ARTS: string;
						public static MEDITATION: string;
						public static MIXED_MARTIAL_ARTS: string;
						public static ON_FOOT: string;
						public static OTHER: string;
						public static P90X: string;
						public static PARAGLIDING: string;
						public static PILATES: string;
						public static POLO: string;
						public static RACQUETBALL: string;
						public static ROCK_CLIMBING: string;
						public static ROWING: string;
						public static ROWING_MACHINE: string;
						public static RUGBY: string;
						public static RUNNING: string;
						public static RUNNING_JOGGING: string;
						public static RUNNING_SAND: string;
						public static RUNNING_TREADMILL: string;
						public static SAILING: string;
						public static SCUBA_DIVING: string;
						public static SKATEBOARDING: string;
						public static SKATING: string;
						public static SKATING_CROSS: string;
						public static SKATING_INDOOR: string;
						public static SKATING_INLINE: string;
						public static SKIING: string;
						public static SKIING_BACK_COUNTRY: string;
						public static SKIING_CROSS_COUNTRY: string;
						public static SKIING_DOWNHILL: string;
						public static SKIING_KITE: string;
						public static SKIING_ROLLER: string;
						public static SLEDDING: string;
						public static SLEEP: string;
						public static SLEEP_LIGHT: string;
						public static SLEEP_DEEP: string;
						public static SLEEP_REM: string;
						public static SLEEP_AWAKE: string;
						public static SNOWBOARDING: string;
						public static SNOWMOBILE: string;
						public static SNOWSHOEING: string;
						public static SOFTBALL: string;
						public static SQUASH: string;
						public static STAIR_CLIMBING: string;
						public static STAIR_CLIMBING_MACHINE: string;
						public static STANDUP_PADDLEBOARDING: string;
						public static STILL: string;
						public static STRENGTH_TRAINING: string;
						public static SURFING: string;
						public static SWIMMING: string;
						public static SWIMMING_POOL: string;
						public static SWIMMING_OPEN_WATER: string;
						public static TABLE_TENNIS: string;
						public static TEAM_SPORTS: string;
						public static TENNIS: string;
						public static TILTING: string;
						public static TREADMILL: string;
						public static UNKNOWN: string;
						public static VOLLEYBALL: string;
						public static VOLLEYBALL_BEACH: string;
						public static VOLLEYBALL_INDOOR: string;
						public static WAKEBOARDING: string;
						public static WALKING: string;
						public static WALKING_FITNESS: string;
						public static WALKING_NORDIC: string;
						public static WALKING_TREADMILL: string;
						public static WALKING_STROLLER: string;
						public static WATER_POLO: string;
						public static WEIGHTLIFTING: string;
						public static WHEELCHAIR: string;
						public static WINDSURFING: string;
						public static YOGA: string;
						public static ZUMBA: string;
						public static getMimeType(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class FitnessOptions implements com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension, com.google.android.gms.common.api.Api.ApiOptions.HasGoogleSignInAccountOptions {
						public static class: java.lang.Class<com.google.android.gms.fitness.FitnessOptions>;
						public static ACCESS_READ: number;
						public static ACCESS_WRITE: number;
						public static builder(): com.google.android.gms.fitness.FitnessOptions.Builder;
						public getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
						public getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toBundle(): globalAndroid.os.Bundle;
						public getExtensionType(): number;
					}
					export module FitnessOptions {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.fitness.FitnessOptions.Builder>;
							public build(): com.google.android.gms.fitness.FitnessOptions;
							public addDataType(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.FitnessOptions.Builder;
							public addDataType(param0: com.google.android.gms.fitness.data.DataType, param1: number): com.google.android.gms.fitness.FitnessOptions.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class FitnessStatusCodes extends com.google.android.gms.common.api.CommonStatusCodes {
						public static class: java.lang.Class<com.google.android.gms.fitness.FitnessStatusCodes>;
						public static SUCCESS_NO_DATA_SOURCES: number;
						public static SUCCESS_ALREADY_SUBSCRIBED: number;
						public static SUCCESS_NO_CLAIMED_DEVICE: number;
						public static SUCCESS_LISTENER_NOT_REGISTERED_FOR_FITNESS_DATA_UPDATES: number;
						public static NEEDS_OAUTH_PERMISSIONS: number;
						public static CONFLICTING_DATA_TYPE: number;
						public static INCONSISTENT_DATA_TYPE: number;
						public static DATA_TYPE_NOT_FOUND: number;
						public static APP_MISMATCH: number;
						public static UNKNOWN_AUTH_ERROR: number;
						public static MISSING_BLE_PERMISSION: number;
						public static UNSUPPORTED_PLATFORM: number;
						public static TRANSIENT_ERROR: number;
						public static EQUIVALENT_SESSION_ENDED: number;
						public static APP_NOT_FIT_ENABLED: number;
						public static API_EXCEPTION: number;
						public static AGGREGATION_NOT_SUPPORTED: number;
						public static UNSUPPORTED_ACCOUNT: number;
						public static DISABLED_BLUETOOTH: number;
						public static INCONSISTENT_PACKAGE_NAME: number;
						public static DATA_SOURCE_NOT_FOUND: number;
						public static DATASET_TIMESTAMP_INCONSISTENT_WITH_UPDATE_TIME_RANGE: number;
						public static INVALID_SESSION_TIMESTAMPS: number;
						public static INVALID_DATA_POINT: number;
						public static INVALID_TIMESTAMP: number;
						public static DATA_TYPE_NOT_ALLOWED_FOR_API: number;
						public static REQUIRES_APP_WHITELISTING: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class GoalsApi {
						public static class: java.lang.Class<com.google.android.gms.fitness.GoalsApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.fitness.GoalsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							readCurrentGoals(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.GoalsReadRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.GoalsResult>;
						});
						public constructor();
						public readCurrentGoals(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.GoalsReadRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.GoalsResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class GoalsClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.fitness.FitnessOptions> {
						public static class: java.lang.Class<com.google.android.gms.fitness.GoalsClient>;
						public readCurrentGoals(param0: com.google.android.gms.fitness.request.GoalsReadRequest): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.fitness.data.Goal>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class HistoryApi {
						public static class: java.lang.Class<com.google.android.gms.fitness.HistoryApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.fitness.HistoryApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							readData(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataReadRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DataReadResult>;
							readDailyTotal(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DailyTotalResult>;
							readDailyTotalFromLocalDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DailyTotalResult>;
							insertData(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataSet): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							deleteData(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataDeleteRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							updateData(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataUpdateRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							registerDataUpdateListener(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							unregisterDataUpdateListener(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
						public readData(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataReadRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DataReadResult>;
						public insertData(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataSet): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public deleteData(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataDeleteRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public updateData(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataUpdateRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public registerDataUpdateListener(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public readDailyTotalFromLocalDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DailyTotalResult>;
						public readDailyTotal(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DailyTotalResult>;
						public unregisterDataUpdateListener(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
					export module HistoryApi {
						export class ViewIntentBuilder {
							public static class: java.lang.Class<com.google.android.gms.fitness.HistoryApi.ViewIntentBuilder>;
							public setDataSource(param0: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.fitness.HistoryApi.ViewIntentBuilder;
							public setTimeInterval(param0: number, param1: number, param2: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.HistoryApi.ViewIntentBuilder;
							public setPreferredApplication(param0: string): com.google.android.gms.fitness.HistoryApi.ViewIntentBuilder;
							public build(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.fitness.data.DataType);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class HistoryClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.fitness.FitnessOptions> {
						public static class: java.lang.Class<com.google.android.gms.fitness.HistoryClient>;
						public deleteData(param0: com.google.android.gms.fitness.request.DataDeleteRequest): com.google.android.gms.tasks.Task<java.lang.Void>;
						public readDailyTotal(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.tasks.Task<com.google.android.gms.fitness.data.DataSet>;
						public unregisterDataUpdateListener(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public insertData(param0: com.google.android.gms.fitness.data.DataSet): com.google.android.gms.tasks.Task<java.lang.Void>;
						public readData(param0: com.google.android.gms.fitness.request.DataReadRequest): com.google.android.gms.tasks.Task<com.google.android.gms.fitness.result.DataReadResponse>;
						public registerDataUpdateListener(param0: com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest): com.google.android.gms.tasks.Task<java.lang.Void>;
						public readDailyTotalFromLocalDevice(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.tasks.Task<com.google.android.gms.fitness.data.DataSet>;
						public updateData(param0: com.google.android.gms.fitness.request.DataUpdateRequest): com.google.android.gms.tasks.Task<java.lang.Void>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class RecordingApi {
						public static class: java.lang.Class<com.google.android.gms.fitness.RecordingApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.fitness.RecordingApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							subscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							subscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							unsubscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							unsubscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							unsubscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.Subscription): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							listSubscriptions(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.ListSubscriptionsResult>;
							listSubscriptions(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.ListSubscriptionsResult>;
						});
						public constructor();
						public listSubscriptions(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.ListSubscriptionsResult>;
						public subscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public unsubscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public unsubscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public unsubscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.Subscription): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public subscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public listSubscriptions(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.ListSubscriptionsResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class RecordingClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.fitness.FitnessOptions> {
						public static class: java.lang.Class<com.google.android.gms.fitness.RecordingClient>;
						public unsubscribe(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.tasks.Task<java.lang.Void>;
						public subscribe(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.tasks.Task<java.lang.Void>;
						public subscribe(param0: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.tasks.Task<java.lang.Void>;
						public listSubscriptions(): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.fitness.data.Subscription>>;
						public listSubscriptions(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.fitness.data.Subscription>>;
						public unsubscribe(param0: com.google.android.gms.fitness.data.Subscription): com.google.android.gms.tasks.Task<java.lang.Void>;
						public unsubscribe(param0: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.tasks.Task<java.lang.Void>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class SensorsApi {
						public static class: java.lang.Class<com.google.android.gms.fitness.SensorsApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.fitness.SensorsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							findDataSources(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataSourcesRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DataSourcesResult>;
							add(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.SensorRequest, param2: com.google.android.gms.fitness.request.OnDataPointListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							add(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.SensorRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							remove(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.OnDataPointListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							remove(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
						public remove(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.OnDataPointListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public findDataSources(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataSourcesRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DataSourcesResult>;
						public remove(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class SensorsClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.fitness.FitnessOptions> {
						public static class: java.lang.Class<com.google.android.gms.fitness.SensorsClient>;
						public findDataSources(param0: com.google.android.gms.fitness.request.DataSourcesRequest): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.fitness.data.DataSource>>;
						public remove(param0: com.google.android.gms.fitness.request.OnDataPointListener): com.google.android.gms.tasks.Task<java.lang.Boolean>;
						public remove(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class SessionsApi {
						public static class: java.lang.Class<com.google.android.gms.fitness.SessionsApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.fitness.SessionsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							startSession(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.Session): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							stopSession(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.SessionStopResult>;
							insertSession(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.SessionInsertRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							readSession(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.SessionReadRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.SessionReadResult>;
							registerForSessions(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							unregisterForSessions(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
						public readSession(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.SessionReadRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.SessionReadResult>;
						public startSession(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.Session): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public stopSession(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.SessionStopResult>;
						public unregisterForSessions(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public insertSession(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.SessionInsertRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public registerForSessions(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
					export module SessionsApi {
						export class ViewIntentBuilder {
							public static class: java.lang.Class<com.google.android.gms.fitness.SessionsApi.ViewIntentBuilder>;
							public build(): globalAndroid.content.Intent;
							public setSession(param0: com.google.android.gms.fitness.data.Session): com.google.android.gms.fitness.SessionsApi.ViewIntentBuilder;
							public setPreferredApplication(param0: string): com.google.android.gms.fitness.SessionsApi.ViewIntentBuilder;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export class SessionsClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.fitness.FitnessOptions> {
						public static class: java.lang.Class<com.google.android.gms.fitness.SessionsClient>;
						public registerForSessions(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public startSession(param0: com.google.android.gms.fitness.data.Session): com.google.android.gms.tasks.Task<java.lang.Void>;
						public stopSession(param0: string): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.fitness.data.Session>>;
						public insertSession(param0: com.google.android.gms.fitness.request.SessionInsertRequest): com.google.android.gms.tasks.Task<java.lang.Void>;
						public unregisterForSessions(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public readSession(param0: com.google.android.gms.fitness.request.SessionReadRequest): com.google.android.gms.tasks.Task<com.google.android.gms.fitness.result.SessionReadResponse>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class BleDevice extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.BleDevice>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.BleDevice>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getAddress(): string;
							public getSupportedProfiles(): java.util.List<string>;
							public hashCode(): number;
							public getName(): string;
							public toString(): string;
							public getDataTypes(): java.util.List<com.google.android.gms.fitness.data.DataType>;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class Bucket extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.Bucket>;
							public static TYPE_TIME: number;
							public static TYPE_SESSION: number;
							public static TYPE_ACTIVITY_TYPE: number;
							public static TYPE_ACTIVITY_SEGMENT: number;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Bucket>;
							public constructor();
							public getSession(): com.google.android.gms.fitness.data.Session;
							public getActivityType(): number;
							public hashCode(): number;
							public getEndTime(param0: java.util.concurrent.TimeUnit): number;
							public getBucketType(): number;
							public constructor(param0: com.google.android.gms.fitness.data.RawBucket, param1: java.util.List<com.google.android.gms.fitness.data.DataSource>);
							public toString(): string;
							public getStartTime(param0: java.util.concurrent.TimeUnit): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getDataSet(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.data.DataSet;
							public getDataSets(): java.util.List<com.google.android.gms.fitness.data.DataSet>;
							public equals(param0: any): boolean;
							public getActivity(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class DataPoint extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.DataPoint>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.DataPoint>;
							public constructor();
							public constructor(param0: com.google.android.gms.fitness.data.DataSource, param1: number, param2: number, param3: androidNative.Array<com.google.android.gms.fitness.data.Value>, param4: com.google.android.gms.fitness.data.DataSource, param5: number, param6: number);
							public getDataSource(): com.google.android.gms.fitness.data.DataSource;
							public hashCode(): number;
							public setFloatValues(param0: androidNative.Array<number>): com.google.android.gms.fitness.data.DataPoint;
							public getEndTime(param0: java.util.concurrent.TimeUnit): number;
							public toString(): string;
							public getOriginalDataSource(): com.google.android.gms.fitness.data.DataSource;
							public getTimestamp(param0: java.util.concurrent.TimeUnit): number;
							public getStartTime(param0: java.util.concurrent.TimeUnit): number;
							public static create(param0: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.fitness.data.DataPoint;
							public getDataType(): com.google.android.gms.fitness.data.DataType;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public static extract(param0: globalAndroid.content.Intent): com.google.android.gms.fitness.data.DataPoint;
							public setTimeInterval(param0: number, param1: number, param2: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.data.DataPoint;
							public setIntValues(param0: androidNative.Array<number>): com.google.android.gms.fitness.data.DataPoint;
							public getValue(param0: com.google.android.gms.fitness.data.Field): com.google.android.gms.fitness.data.Value;
							public equals(param0: any): boolean;
							public setTimestamp(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.data.DataPoint;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class DataSet extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.DataSet>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.DataSet>;
							public constructor();
							public getDataSource(): com.google.android.gms.fitness.data.DataSource;
							public constructor(param0: com.google.android.gms.fitness.data.RawDataSet, param1: java.util.List<com.google.android.gms.fitness.data.DataSource>);
							public addAll(param0: java.lang.Iterable<com.google.android.gms.fitness.data.DataPoint>): void;
							public hashCode(): number;
							public toString(): string;
							public getDataType(): com.google.android.gms.fitness.data.DataType;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public createDataPoint(): com.google.android.gms.fitness.data.DataPoint;
							public getDataPoints(): java.util.List<com.google.android.gms.fitness.data.DataPoint>;
							public isEmpty(): boolean;
							public equals(param0: any): boolean;
							public static create(param0: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.fitness.data.DataSet;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class DataSource extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.DataSource>;
							public static EXTRA_DATA_SOURCE: string;
							public static TYPE_RAW: number;
							public static TYPE_DERIVED: number;
							public static DATA_QUALITY_BLOOD_PRESSURE_ESH2002: number;
							public static DATA_QUALITY_BLOOD_PRESSURE_ESH2010: number;
							public static DATA_QUALITY_BLOOD_PRESSURE_AAMI: number;
							public static DATA_QUALITY_BLOOD_PRESSURE_BHS_A_A: number;
							public static DATA_QUALITY_BLOOD_PRESSURE_BHS_A_B: number;
							public static DATA_QUALITY_BLOOD_PRESSURE_BHS_B_A: number;
							public static DATA_QUALITY_BLOOD_PRESSURE_BHS_B_B: number;
							public static DATA_QUALITY_BLOOD_GLUCOSE_ISO151972003: number;
							public static DATA_QUALITY_BLOOD_GLUCOSE_ISO151972013: number;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.DataSource>;
							public constructor();
							public constructor(param0: com.google.android.gms.fitness.data.DataType, param1: string, param2: number, param3: com.google.android.gms.fitness.data.Device, param4: any /* com.google.android.gms.fitness.data.zzb*/, param5: string, param6: androidNative.Array<number>);
							public getType(): number;
							public hashCode(): number;
							public static extract(param0: globalAndroid.content.Intent): com.google.android.gms.fitness.data.DataSource;
							public toString(): string;
							public getAppPackageName(): string;
							public getDataType(): com.google.android.gms.fitness.data.DataType;
							public toDebugString(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getStreamName(): string;
							public getName(): string;
							public getStreamIdentifier(): string;
							public getDataQualityStandards(): androidNative.Array<number>;
							public getDevice(): com.google.android.gms.fitness.data.Device;
							public equals(param0: any): boolean;
						}
						export module DataSource {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.data.DataSource.Builder>;
								public build(): com.google.android.gms.fitness.data.DataSource;
								public setDataType(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.data.DataSource.Builder;
								public setType(param0: number): com.google.android.gms.fitness.data.DataSource.Builder;
								public setName(param0: string): com.google.android.gms.fitness.data.DataSource.Builder;
								public constructor();
								public setStreamName(param0: string): com.google.android.gms.fitness.data.DataSource.Builder;
								public setDevice(param0: com.google.android.gms.fitness.data.Device): com.google.android.gms.fitness.data.DataSource.Builder;
								public setDataQualityStandards(param0: androidNative.Array<number>): com.google.android.gms.fitness.data.DataSource.Builder;
								public setAppPackageName(param0: string): com.google.android.gms.fitness.data.DataSource.Builder;
								public setAppPackageName(param0: globalAndroid.content.Context): com.google.android.gms.fitness.data.DataSource.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class DataType extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.DataType>;
							public static MIME_TYPE_PREFIX: string;
							public static TYPE_STEP_COUNT_DELTA: com.google.android.gms.fitness.data.DataType;
							public static TYPE_STEP_COUNT_CUMULATIVE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_STEP_COUNT_CADENCE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_ACTIVITY_SEGMENT: com.google.android.gms.fitness.data.DataType;
							public static TYPE_CALORIES_CONSUMED: com.google.android.gms.fitness.data.DataType;
							public static TYPE_CALORIES_EXPENDED: com.google.android.gms.fitness.data.DataType;
							public static TYPE_BASAL_METABOLIC_RATE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_POWER_SAMPLE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_ACTIVITY_SAMPLE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_ACTIVITY_SAMPLES: com.google.android.gms.fitness.data.DataType;
							public static TYPE_HEART_RATE_BPM: com.google.android.gms.fitness.data.DataType;
							public static TYPE_LOCATION_SAMPLE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_LOCATION_TRACK: com.google.android.gms.fitness.data.DataType;
							public static TYPE_DISTANCE_DELTA: com.google.android.gms.fitness.data.DataType;
							public static TYPE_DISTANCE_CUMULATIVE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_SPEED: com.google.android.gms.fitness.data.DataType;
							public static TYPE_CYCLING_WHEEL_REVOLUTION: com.google.android.gms.fitness.data.DataType;
							public static TYPE_CYCLING_WHEEL_RPM: com.google.android.gms.fitness.data.DataType;
							public static TYPE_CYCLING_PEDALING_CUMULATIVE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_CYCLING_PEDALING_CADENCE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_HEIGHT: com.google.android.gms.fitness.data.DataType;
							public static TYPE_WEIGHT: com.google.android.gms.fitness.data.DataType;
							public static TYPE_BODY_FAT_PERCENTAGE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_NUTRITION: com.google.android.gms.fitness.data.DataType;
							public static TYPE_HYDRATION: com.google.android.gms.fitness.data.DataType;
							public static TYPE_WORKOUT_EXERCISE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_MOVE_MINUTES: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_MOVE_MINUTES: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_ACTIVITY_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_BASAL_METABOLIC_RATE_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_STEP_COUNT_DELTA: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_DISTANCE_DELTA: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_CALORIES_CONSUMED: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_CALORIES_EXPENDED: com.google.android.gms.fitness.data.DataType;
							public static TYPE_HEART_POINTS: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_HEART_POINTS: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_HEART_RATE_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_LOCATION_BOUNDING_BOX: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_POWER_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_SPEED_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_BODY_FAT_PERCENTAGE_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_WEIGHT_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_HEIGHT_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_NUTRITION_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_HYDRATION: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_INPUT_TYPES: java.util.Set<com.google.android.gms.fitness.data.DataType>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.DataType>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public static getMimeType(param0: com.google.android.gms.fitness.data.DataType): string;
							public getName(): string;
							public static getAggregatesForInput(param0: com.google.android.gms.fitness.data.DataType): java.util.List<com.google.android.gms.fitness.data.DataType>;
							public getFields(): java.util.List<com.google.android.gms.fitness.data.Field>;
							public indexOf(param0: com.google.android.gms.fitness.data.Field): number;
							public constructor(param0: string, param1: string, param2: string, param3: androidNative.Array<com.google.android.gms.fitness.data.Field>);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class DataUpdateNotification extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.DataUpdateNotification>;
							public static ACTION: string;
							public static OPERATION_INSERT: number;
							public static OPERATION_DELETE: number;
							public static OPERATION_UPDATE: number;
							public static EXTRA_DATA_UPDATE_NOTIFICATION: string;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.DataUpdateNotification>;
							public constructor();
							public getDataSource(): com.google.android.gms.fitness.data.DataSource;
							public getDataType(): com.google.android.gms.fitness.data.DataType;
							public getOperationType(): number;
							public getUpdateEndTime(param0: java.util.concurrent.TimeUnit): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: number, param3: com.google.android.gms.fitness.data.DataSource, param4: com.google.android.gms.fitness.data.DataType);
							public hashCode(): number;
							public static getDataUpdateNotification(param0: globalAndroid.content.Intent): com.google.android.gms.fitness.data.DataUpdateNotification;
							public toString(): string;
							public equals(param0: any): boolean;
							public getUpdateStartTime(param0: java.util.concurrent.TimeUnit): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class Device extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.Device>;
							public static TYPE_UNKNOWN: number;
							public static TYPE_PHONE: number;
							public static TYPE_TABLET: number;
							public static TYPE_WATCH: number;
							public static TYPE_CHEST_STRAP: number;
							public static TYPE_SCALE: number;
							public static TYPE_HEAD_MOUNTED: number;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Device>;
							public constructor();
							public getType(): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getManufacturer(): string;
							public constructor(param0: string, param1: string, param2: string, param3: number, param4: number);
							public constructor(param0: string, param1: string, param2: string, param3: number);
							public toString(): string;
							public static getLocalDevice(param0: globalAndroid.content.Context): com.google.android.gms.fitness.data.Device;
							public getUid(): string;
							public equals(param0: any): boolean;
							public getModel(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class Field extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.Field>;
							public static FIELD_ACTIVITY: com.google.android.gms.fitness.data.Field;
							public static FIELD_CONFIDENCE: com.google.android.gms.fitness.data.Field;
							public static FIELD_ACTIVITY_CONFIDENCE: com.google.android.gms.fitness.data.Field;
							public static FIELD_STEPS: com.google.android.gms.fitness.data.Field;
							public static FIELD_STEP_LENGTH: com.google.android.gms.fitness.data.Field;
							public static FIELD_DURATION: com.google.android.gms.fitness.data.Field;
							public static FIELD_BPM: com.google.android.gms.fitness.data.Field;
							public static FIELD_LATITUDE: com.google.android.gms.fitness.data.Field;
							public static FIELD_LONGITUDE: com.google.android.gms.fitness.data.Field;
							public static FIELD_ACCURACY: com.google.android.gms.fitness.data.Field;
							public static FIELD_ALTITUDE: com.google.android.gms.fitness.data.Field;
							public static FIELD_DISTANCE: com.google.android.gms.fitness.data.Field;
							public static FIELD_HEIGHT: com.google.android.gms.fitness.data.Field;
							public static FIELD_WEIGHT: com.google.android.gms.fitness.data.Field;
							public static FIELD_CIRCUMFERENCE: com.google.android.gms.fitness.data.Field;
							public static FIELD_PERCENTAGE: com.google.android.gms.fitness.data.Field;
							public static FIELD_SPEED: com.google.android.gms.fitness.data.Field;
							public static FIELD_RPM: com.google.android.gms.fitness.data.Field;
							public static FIELD_REVOLUTIONS: com.google.android.gms.fitness.data.Field;
							public static FIELD_CALORIES: com.google.android.gms.fitness.data.Field;
							public static FIELD_WATTS: com.google.android.gms.fitness.data.Field;
							public static FIELD_VOLUME: com.google.android.gms.fitness.data.Field;
							public static FIELD_MEAL_TYPE: com.google.android.gms.fitness.data.Field;
							public static MEAL_TYPE_UNKNOWN: number;
							public static MEAL_TYPE_BREAKFAST: number;
							public static MEAL_TYPE_LUNCH: number;
							public static MEAL_TYPE_DINNER: number;
							public static MEAL_TYPE_SNACK: number;
							public static FIELD_FOOD_ITEM: com.google.android.gms.fitness.data.Field;
							public static FIELD_NUTRIENTS: com.google.android.gms.fitness.data.Field;
							public static NUTRIENT_CALORIES: string;
							public static NUTRIENT_TOTAL_FAT: string;
							public static NUTRIENT_SATURATED_FAT: string;
							public static NUTRIENT_UNSATURATED_FAT: string;
							public static NUTRIENT_POLYUNSATURATED_FAT: string;
							public static NUTRIENT_MONOUNSATURATED_FAT: string;
							public static NUTRIENT_TRANS_FAT: string;
							public static NUTRIENT_CHOLESTEROL: string;
							public static NUTRIENT_SODIUM: string;
							public static NUTRIENT_POTASSIUM: string;
							public static NUTRIENT_TOTAL_CARBS: string;
							public static NUTRIENT_DIETARY_FIBER: string;
							public static NUTRIENT_SUGAR: string;
							public static NUTRIENT_PROTEIN: string;
							public static NUTRIENT_VITAMIN_A: string;
							public static NUTRIENT_VITAMIN_C: string;
							public static NUTRIENT_CALCIUM: string;
							public static NUTRIENT_IRON: string;
							public static FIELD_EXERCISE: com.google.android.gms.fitness.data.Field;
							public static FIELD_REPETITIONS: com.google.android.gms.fitness.data.Field;
							public static FIELD_RESISTANCE: com.google.android.gms.fitness.data.Field;
							public static FIELD_RESISTANCE_TYPE: com.google.android.gms.fitness.data.Field;
							public static RESISTANCE_TYPE_UNKNOWN: number;
							public static RESISTANCE_TYPE_BARBELL: number;
							public static RESISTANCE_TYPE_CABLE: number;
							public static RESISTANCE_TYPE_DUMBBELL: number;
							public static RESISTANCE_TYPE_KETTLEBELL: number;
							public static RESISTANCE_TYPE_MACHINE: number;
							public static RESISTANCE_TYPE_BODY: number;
							public static FIELD_NUM_SEGMENTS: com.google.android.gms.fitness.data.Field;
							public static FIELD_AVERAGE: com.google.android.gms.fitness.data.Field;
							public static FIELD_MAX: com.google.android.gms.fitness.data.Field;
							public static FIELD_MIN: com.google.android.gms.fitness.data.Field;
							public static FIELD_LOW_LATITUDE: com.google.android.gms.fitness.data.Field;
							public static FIELD_LOW_LONGITUDE: com.google.android.gms.fitness.data.Field;
							public static FIELD_HIGH_LATITUDE: com.google.android.gms.fitness.data.Field;
							public static FIELD_HIGH_LONGITUDE: com.google.android.gms.fitness.data.Field;
							public static FIELD_OCCURRENCES: com.google.android.gms.fitness.data.Field;
							public static FIELD_INTENSITY: com.google.android.gms.fitness.data.Field;
							public static FORMAT_INT32: number;
							public static FORMAT_FLOAT: number;
							public static FORMAT_STRING: number;
							public static FORMAT_MAP: number;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Field>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getName(): string;
							public isOptional(): java.lang.Boolean;
							public toString(): string;
							public getFormat(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class Goal extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.Goal>;
							public static OBJECTIVE_TYPE_METRIC: number;
							public static OBJECTIVE_TYPE_DURATION: number;
							public static OBJECTIVE_TYPE_FREQUENCY: number;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Goal>;
							public getFrequencyObjective(): com.google.android.gms.fitness.data.Goal.FrequencyObjective;
							public hashCode(): number;
							public getEndTime(param0: java.util.Calendar, param1: java.util.concurrent.TimeUnit): number;
							public toString(): string;
							public getRecurrence(): com.google.android.gms.fitness.data.Goal.Recurrence;
							public getObjectiveType(): number;
							public getDurationObjective(): com.google.android.gms.fitness.data.Goal.DurationObjective;
							public getStartTime(param0: java.util.Calendar, param1: java.util.concurrent.TimeUnit): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getActivityName(): string;
							public getMetricObjective(): com.google.android.gms.fitness.data.Goal.MetricObjective;
							public equals(param0: any): boolean;
							public getCreateTime(param0: java.util.concurrent.TimeUnit): number;
						}
						export module Goal {
							export class DurationObjective extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.fitness.data.Goal.DurationObjective>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Goal.DurationObjective>;
								public toString(): string;
								public getDuration(param0: java.util.concurrent.TimeUnit): number;
								public equals(param0: any): boolean;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: number, param1: java.util.concurrent.TimeUnit);
								public hashCode(): number;
							}
							export class FrequencyObjective extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.fitness.data.Goal.FrequencyObjective>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Goal.FrequencyObjective>;
								public toString(): string;
								public constructor(param0: number);
								public equals(param0: any): boolean;
								public getFrequency(): number;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public hashCode(): number;
							}
							export class MetricObjective extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.fitness.data.Goal.MetricObjective>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Goal.MetricObjective>;
								public toString(): string;
								public getValue(): number;
								public getDataTypeName(): string;
								public equals(param0: any): boolean;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public hashCode(): number;
								public constructor(param0: string, param1: number, param2: number);
								public constructor(param0: string, param1: number);
							}
							export class MismatchedGoalException {
								public static class: java.lang.Class<com.google.android.gms.fitness.data.Goal.MismatchedGoalException>;
								public constructor(param0: string);
							}
							export class ObjectiveType {
								public static class: java.lang.Class<com.google.android.gms.fitness.data.Goal.ObjectiveType>;
								/**
								 * Constructs a new instance of the com.google.android.gms.fitness.data.Goal$ObjectiveType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class Recurrence extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.fitness.data.Goal.Recurrence>;
								public static UNIT_DAY: number;
								public static UNIT_WEEK: number;
								public static UNIT_MONTH: number;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Goal.Recurrence>;
								public toString(): string;
								public constructor(param0: number, param1: number);
								public equals(param0: any): boolean;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getCount(): number;
								public hashCode(): number;
								public getUnit(): number;
							}
							export module Recurrence {
								export class RecurrenceUnit {
									public static class: java.lang.Class<com.google.android.gms.fitness.data.Goal.Recurrence.RecurrenceUnit>;
									/**
									 * Constructs a new instance of the com.google.android.gms.fitness.data.Goal$Recurrence$RecurrenceUnit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class HealthDataTypes {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.HealthDataTypes>;
							public static TYPE_BLOOD_PRESSURE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_BLOOD_GLUCOSE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_OXYGEN_SATURATION: com.google.android.gms.fitness.data.DataType;
							public static TYPE_BODY_TEMPERATURE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_BASAL_BODY_TEMPERATURE: com.google.android.gms.fitness.data.DataType;
							public static TYPE_CERVICAL_MUCUS: com.google.android.gms.fitness.data.DataType;
							public static TYPE_CERVICAL_POSITION: com.google.android.gms.fitness.data.DataType;
							public static TYPE_MENSTRUATION: com.google.android.gms.fitness.data.DataType;
							public static TYPE_OVULATION_TEST: com.google.android.gms.fitness.data.DataType;
							public static TYPE_VAGINAL_SPOTTING: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_BLOOD_PRESSURE_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_BLOOD_GLUCOSE_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_OXYGEN_SATURATION_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_BODY_TEMPERATURE_SUMMARY: com.google.android.gms.fitness.data.DataType;
							public static AGGREGATE_BASAL_BODY_TEMPERATURE_SUMMARY: com.google.android.gms.fitness.data.DataType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class HealthFields {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.HealthFields>;
							public static FIELD_BLOOD_PRESSURE_SYSTOLIC: com.google.android.gms.fitness.data.Field;
							public static FIELD_BLOOD_PRESSURE_SYSTOLIC_AVERAGE: com.google.android.gms.fitness.data.Field;
							public static FIELD_BLOOD_PRESSURE_SYSTOLIC_MIN: com.google.android.gms.fitness.data.Field;
							public static FIELD_BLOOD_PRESSURE_SYSTOLIC_MAX: com.google.android.gms.fitness.data.Field;
							public static FIELD_BLOOD_PRESSURE_DIASTOLIC: com.google.android.gms.fitness.data.Field;
							public static FIELD_BLOOD_PRESSURE_DIASTOLIC_AVERAGE: com.google.android.gms.fitness.data.Field;
							public static FIELD_BLOOD_PRESSURE_DIASTOLIC_MIN: com.google.android.gms.fitness.data.Field;
							public static FIELD_BLOOD_PRESSURE_DIASTOLIC_MAX: com.google.android.gms.fitness.data.Field;
							public static FIELD_BODY_POSITION: com.google.android.gms.fitness.data.Field;
							public static BODY_POSITION_STANDING: number;
							public static BODY_POSITION_SITTING: number;
							public static BODY_POSITION_LYING_DOWN: number;
							public static BODY_POSITION_SEMI_RECUMBENT: number;
							public static FIELD_BLOOD_PRESSURE_MEASUREMENT_LOCATION: com.google.android.gms.fitness.data.Field;
							public static BLOOD_PRESSURE_MEASUREMENT_LOCATION_LEFT_WRIST: number;
							public static BLOOD_PRESSURE_MEASUREMENT_LOCATION_RIGHT_WRIST: number;
							public static BLOOD_PRESSURE_MEASUREMENT_LOCATION_LEFT_UPPER_ARM: number;
							public static BLOOD_PRESSURE_MEASUREMENT_LOCATION_RIGHT_UPPER_ARM: number;
							public static FIELD_BLOOD_GLUCOSE_LEVEL: com.google.android.gms.fitness.data.Field;
							public static FIELD_TEMPORAL_RELATION_TO_MEAL: com.google.android.gms.fitness.data.Field;
							public static FIELD_TEMPORAL_RELATION_TO_MEAL_GENERAL: number;
							public static FIELD_TEMPORAL_RELATION_TO_MEAL_FASTING: number;
							public static FIELD_TEMPORAL_RELATION_TO_MEAL_BEFORE_MEAL: number;
							public static FIELD_TEMPORAL_RELATION_TO_MEAL_AFTER_MEAL: number;
							public static FIELD_TEMPORAL_RELATION_TO_SLEEP: com.google.android.gms.fitness.data.Field;
							public static TEMPORAL_RELATION_TO_SLEEP_FULLY_AWAKE: number;
							public static TEMPORAL_RELATION_TO_SLEEP_BEFORE_SLEEP: number;
							public static TEMPORAL_RELATION_TO_SLEEP_ON_WAKING: number;
							public static TEMPORAL_RELATION_TO_SLEEP_DURING_SLEEP: number;
							public static FIELD_BLOOD_GLUCOSE_SPECIMEN_SOURCE: com.google.android.gms.fitness.data.Field;
							public static BLOOD_GLUCOSE_SPECIMEN_SOURCE_INTERSTITIAL_FLUID: number;
							public static BLOOD_GLUCOSE_SPECIMEN_SOURCE_CAPILLARY_BLOOD: number;
							public static BLOOD_GLUCOSE_SPECIMEN_SOURCE_PLASMA: number;
							public static BLOOD_GLUCOSE_SPECIMEN_SOURCE_SERUM: number;
							public static BLOOD_GLUCOSE_SPECIMEN_SOURCE_TEARS: number;
							public static BLOOD_GLUCOSE_SPECIMEN_SOURCE_WHOLE_BLOOD: number;
							public static FIELD_OXYGEN_SATURATION: com.google.android.gms.fitness.data.Field;
							public static FIELD_OXYGEN_SATURATION_AVERAGE: com.google.android.gms.fitness.data.Field;
							public static FIELD_OXYGEN_SATURATION_MIN: com.google.android.gms.fitness.data.Field;
							public static FIELD_OXYGEN_SATURATION_MAX: com.google.android.gms.fitness.data.Field;
							public static FIELD_SUPPLEMENTAL_OXYGEN_FLOW_RATE: com.google.android.gms.fitness.data.Field;
							public static FIELD_SUPPLEMENTAL_OXYGEN_FLOW_RATE_AVERAGE: com.google.android.gms.fitness.data.Field;
							public static FIELD_SUPPLEMENTAL_OXYGEN_FLOW_RATE_MIN: com.google.android.gms.fitness.data.Field;
							public static FIELD_SUPPLEMENTAL_OXYGEN_FLOW_RATE_MAX: com.google.android.gms.fitness.data.Field;
							public static FIELD_OXYGEN_THERAPY_ADMINISTRATION_MODE: com.google.android.gms.fitness.data.Field;
							public static OXYGEN_THERAPY_ADMINISTRATION_MODE_NASAL_CANULA: number;
							public static FIELD_OXYGEN_SATURATION_SYSTEM: com.google.android.gms.fitness.data.Field;
							public static OXYGEN_SATURATION_SYSTEM_PERIPHERAL_CAPILLARY: number;
							public static FIELD_OXYGEN_SATURATION_MEASUREMENT_METHOD: com.google.android.gms.fitness.data.Field;
							public static OXYGEN_SATURATION_MEASUREMENT_METHOD_PULSE_OXIMETRY: number;
							public static FIELD_BODY_TEMPERATURE: com.google.android.gms.fitness.data.Field;
							public static FIELD_BODY_TEMPERATURE_MEASUREMENT_LOCATION: com.google.android.gms.fitness.data.Field;
							public static BODY_TEMPERATURE_MEASUREMENT_LOCATION_AXILLARY: number;
							public static BODY_TEMPERATURE_MEASUREMENT_LOCATION_FINGER: number;
							public static BODY_TEMPERATURE_MEASUREMENT_LOCATION_FOREHEAD: number;
							public static BODY_TEMPERATURE_MEASUREMENT_LOCATION_ORAL: number;
							public static BODY_TEMPERATURE_MEASUREMENT_LOCATION_RECTAL: number;
							public static BODY_TEMPERATURE_MEASUREMENT_LOCATION_TEMPORAL_ARTERY: number;
							public static BODY_TEMPERATURE_MEASUREMENT_LOCATION_TOE: number;
							public static BODY_TEMPERATURE_MEASUREMENT_LOCATION_TYMPANIC: number;
							public static BODY_TEMPERATURE_MEASUREMENT_LOCATION_WRIST: number;
							public static BODY_TEMPERATURE_MEASUREMENT_LOCATION_VAGINAL: number;
							public static FIELD_CERVICAL_MUCUS_TEXTURE: com.google.android.gms.fitness.data.Field;
							public static CERVICAL_MUCUS_TEXTURE_DRY: number;
							public static CERVICAL_MUCUS_TEXTURE_STICKY: number;
							public static CERVICAL_MUCUS_TEXTURE_CREAMY: number;
							public static CERVICAL_MUCUS_TEXTURE_WATERY: number;
							public static CERVICAL_MUCUS_TEXTURE_EGG_WHITE: number;
							public static FIELD_CERVICAL_MUCUS_AMOUNT: com.google.android.gms.fitness.data.Field;
							public static CERVICAL_MUCUS_AMOUNT_LIGHT: number;
							public static CERVICAL_MUCUS_AMOUNT_MEDIUM: number;
							public static CERVICAL_MUCUS_AMOUNT_HEAVY: number;
							public static FIELD_CERVICAL_POSITION: com.google.android.gms.fitness.data.Field;
							public static CERVICAL_POSITION_LOW: number;
							public static CERVICAL_POSITION_MEDIUM: number;
							public static CERVICAL_POSITION_HIGH: number;
							public static FIELD_CERVICAL_DILATION: com.google.android.gms.fitness.data.Field;
							public static CERVICAL_DILATION_CLOSED: number;
							public static CERVICAL_DILATION_MEDIUM: number;
							public static CERVICAL_DILATION_OPEN: number;
							public static FIELD_CERVICAL_FIRMNESS: com.google.android.gms.fitness.data.Field;
							public static CERVICAL_FIRMNESS_SOFT: number;
							public static CERVICAL_FIRMNESS_MEDIUM: number;
							public static CERVICAL_FIRMNESS_FIRM: number;
							public static FIELD_MENSTRUAL_FLOW: com.google.android.gms.fitness.data.Field;
							public static MENSTRUAL_FLOW_SPOTTING: number;
							public static MENSTRUAL_FLOW_LIGHT: number;
							public static MENSTRUAL_FLOW_MEDIUM: number;
							public static MENSTRUAL_FLOW_HEAVY: number;
							public static FIELD_OVULATION_TEST_RESULT: com.google.android.gms.fitness.data.Field;
							public static OVULATION_TEST_RESULT_NEGATIVE: number;
							public static OVULATION_TEST_RESULT_POSITIVE: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class MapValue extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.MapValue>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.MapValue>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public asFloat(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class RawBucket extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.RawBucket>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.RawBucket>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: number, param1: number, param2: com.google.android.gms.fitness.data.Session, param3: number, param4: java.util.List<com.google.android.gms.fitness.data.RawDataSet>, param5: number, param6: boolean);
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: com.google.android.gms.fitness.data.Bucket, param1: java.util.List<com.google.android.gms.fitness.data.DataSource>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class RawDataPoint extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.RawDataPoint>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.RawDataPoint>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getTimestampNanos(): number;
							public toString(): string;
							public constructor(param0: number, param1: number, param2: androidNative.Array<com.google.android.gms.fitness.data.Value>, param3: number, param4: number, param5: number, param6: number);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class RawDataSet extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.RawDataSet>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.RawDataSet>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: number, param1: java.util.List<com.google.android.gms.fitness.data.RawDataPoint>, param2: boolean);
							public constructor(param0: com.google.android.gms.fitness.data.DataSet, param1: java.util.List<com.google.android.gms.fitness.data.DataSource>);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class Session extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.Session>;
							public static EXTRA_SESSION: string;
							public static MIME_TYPE_PREFIX: string;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Session>;
							public constructor();
							public static getMimeType(param0: string): string;
							public getActiveTime(param0: java.util.concurrent.TimeUnit): number;
							public hashCode(): number;
							public getEndTime(param0: java.util.concurrent.TimeUnit): number;
							public toString(): string;
							public getAppPackageName(): string;
							public constructor(param0: number, param1: number, param2: string, param3: string, param4: string, param5: number, param6: any /* com.google.android.gms.fitness.data.zzb*/, param7: java.lang.Long);
							public getDescription(): string;
							public getStartTime(param0: java.util.concurrent.TimeUnit): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getName(): string;
							public static extract(param0: globalAndroid.content.Intent): com.google.android.gms.fitness.data.Session;
							public getIdentifier(): string;
							public equals(param0: any): boolean;
							public hasActiveTime(): boolean;
							public isOngoing(): boolean;
							public getActivity(): string;
						}
						export module Session {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.data.Session.Builder>;
								public setDescription(param0: string): com.google.android.gms.fitness.data.Session.Builder;
								public setEndTime(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.data.Session.Builder;
								public setName(param0: string): com.google.android.gms.fitness.data.Session.Builder;
								public setIdentifier(param0: string): com.google.android.gms.fitness.data.Session.Builder;
								public setStartTime(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.data.Session.Builder;
								public constructor();
								public setActivity(param0: string): com.google.android.gms.fitness.data.Session.Builder;
								public setActiveTime(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.data.Session.Builder;
								public build(): com.google.android.gms.fitness.data.Session;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class Subscription extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.Subscription>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Subscription>;
							public getDataSource(): com.google.android.gms.fitness.data.DataSource;
							public getDataType(): com.google.android.gms.fitness.data.DataType;
							public toDebugString(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class Value extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.Value>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Value>;
							public constructor();
							public clearKey(param0: string): void;
							public getKeyValue(param0: string): java.lang.Float;
							public hashCode(): number;
							public setKeyValue(param0: string, param1: number): void;
							public setInt(param0: number): void;
							public toString(): string;
							public setFloat(param0: number): void;
							public asActivity(): string;
							public isSet(): boolean;
							public getFormat(): number;
							public constructor(param0: number);
							public asInt(): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public setString(param0: string): void;
							public asString(): string;
							public asFloat(): number;
							public setActivity(param0: string): void;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class WorkoutExercises {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.WorkoutExercises>;
							public static PUSHUP: string;
							public static CLOSE_GRIP_PUSHUP: string;
							public static PIKE_PUSHUP: string;
							public static BENCH_PRESS: string;
							public static INCLINE_BENCH_PRESS: string;
							public static DECLINE_BENCH_PRESS: string;
							public static CLOSE_GRIP_BENCH_PRESS: string;
							public static PULLOVER: string;
							public static TRICEPS_DIP: string;
							public static CHEST_DIP: string;
							public static SHOULDER_PRESS: string;
							public static PIKE_PRESS: string;
							public static ARNOLD_PRESS: string;
							public static MILITARY_PRESS: string;
							public static LATERAL_RAISE: string;
							public static FRONT_RAISE: string;
							public static REAR_LATERAL_RAISE: string;
							public static CLEAN: string;
							public static CLEAN_JERK: string;
							public static HANG_CLEAN: string;
							public static POWER_CLEAN: string;
							public static HANG_POWER_CLEAN: string;
							public static UPRIGHT_ROW: string;
							public static HIGH_ROW: string;
							public static PULLUP: string;
							public static CHINUP: string;
							public static PULLDOWN: string;
							public static SHRUG: string;
							public static BACK_EXTENSION: string;
							public static GOOD_MORNING: string;
							public static BICEP_CURL: string;
							public static TRICEPS_EXTENSION: string;
							public static JM_PRESS: string;
							public static SQUAT: string;
							public static LEG_PRESS: string;
							public static LEG_CURL: string;
							public static LEG_EXTENSION: string;
							public static WALL_SIT: string;
							public static STEP_UP: string;
							public static DEADLIFT: string;
							public static SINGLE_LEG_DEADLIFT: string;
							public static STRAIGHT_LEG_DEADLIFT: string;
							public static RDL_DEADLIFT: string;
							public static RLD_DEADLIFT: string;
							public static LUNGE: string;
							public static REAR_LUNGE: string;
							public static SIDE_LUNGE: string;
							public static SITUP: string;
							public static CRUNCH: string;
							public static LEG_RAISE: string;
							public static HIP_RAISE: string;
							public static V_UPS: string;
							public static TWISTING_SITUP: string;
							public static TWISTING_CRUNCH: string;
							public static PLANK: string;
							public static SIDE_PLANK: string;
							public static HIP_THRUST: string;
							public static HIP_BRIDGE: string;
							public static SINGLE_LEG_HIP_BRIDGE: string;
							public static HIP_EXTENSION: string;
							public static RUSSIAN_TWIST: string;
							public static SWING: string;
							public static CALF_RAISE: string;
							public static STANDING_CALF_RAISE: string;
							public static SEATED_CALF_RAISE: string;
							public static CALF_PRESS: string;
							public static THRUSTER: string;
							public static JUMPING_JACK: string;
							public static BURPEE: string;
							public static HIGH_KNEE_RUN: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class zzaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.RawDataSet> {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.zzaa>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class zzab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Goal.Recurrence> {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.zzab>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class zzac {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.zzac>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class zzad extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Session> {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.zzad>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class zzae extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.zzae>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.zzae>*/;
							public constructor();
							public getSession(): com.google.android.gms.fitness.data.Session;
							public constructor(param0: com.google.android.gms.fitness.data.Session, param1: com.google.android.gms.fitness.data.DataSet);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getDataSet(): com.google.android.gms.fitness.data.DataSet;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class zzaf extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.zzae>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.zzaf>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class zzag {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.zzag>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class zzah extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Subscription> {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.zzah>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module data {
						export class zzai extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.data.Value> {
							public static class: java.lang.Class<com.google.android.gms.fitness.data.zzai>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export abstract class BleScanCallback {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.BleScanCallback>;
							public constructor();
							public onDeviceFound(param0: com.google.android.gms.fitness.data.BleDevice): void;
							public onScanStopped(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class DataDeleteRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.DataDeleteRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.DataDeleteRequest>;
							public constructor();
							public getDataSources(): java.util.List<com.google.android.gms.fitness.data.DataSource>;
							public hashCode(): number;
							public constructor(param0: com.google.android.gms.fitness.request.DataDeleteRequest, param1: any /* com.google.android.gms.internal.fitness.zzcq*/);
							public getEndTime(param0: java.util.concurrent.TimeUnit): number;
							public toString(): string;
							public getDataTypes(): java.util.List<com.google.android.gms.fitness.data.DataType>;
							public deleteAllData(): boolean;
							public getStartTime(param0: java.util.concurrent.TimeUnit): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public equals(param0: any): boolean;
							public deleteAllSessions(): boolean;
							public getSessions(): java.util.List<com.google.android.gms.fitness.data.Session>;
						}
						export module DataDeleteRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.request.DataDeleteRequest.Builder>;
								public addDataSource(param0: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.fitness.request.DataDeleteRequest.Builder;
								public setTimeInterval(param0: number, param1: number, param2: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.request.DataDeleteRequest.Builder;
								public deleteAllData(): com.google.android.gms.fitness.request.DataDeleteRequest.Builder;
								public deleteAllSessions(): com.google.android.gms.fitness.request.DataDeleteRequest.Builder;
								public addDataType(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.request.DataDeleteRequest.Builder;
								public constructor();
								public addSession(param0: com.google.android.gms.fitness.data.Session): com.google.android.gms.fitness.request.DataDeleteRequest.Builder;
								public build(): com.google.android.gms.fitness.request.DataDeleteRequest;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class DataReadRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.DataReadRequest>;
							public static NO_LIMIT: number;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.DataReadRequest>;
							public constructor();
							public getFilteredDataQualityStandards(): java.util.List<java.lang.Integer>;
							public getDataSources(): java.util.List<com.google.android.gms.fitness.data.DataSource>;
							public hashCode(): number;
							public constructor(param0: com.google.android.gms.fitness.request.DataReadRequest, param1: any /* com.google.android.gms.internal.fitness.zzbh*/);
							public getAggregatedDataSources(): java.util.List<com.google.android.gms.fitness.data.DataSource>;
							public getEndTime(param0: java.util.concurrent.TimeUnit): number;
							public getBucketType(): number;
							public toString(): string;
							public getDataTypes(): java.util.List<com.google.android.gms.fitness.data.DataType>;
							public getStartTime(param0: java.util.concurrent.TimeUnit): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getActivityDataSource(): com.google.android.gms.fitness.data.DataSource;
							public getBucketDuration(param0: java.util.concurrent.TimeUnit): number;
							public getAggregatedDataTypes(): java.util.List<com.google.android.gms.fitness.data.DataType>;
							public equals(param0: any): boolean;
							public getLimit(): number;
						}
						export module DataReadRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.request.DataReadRequest.Builder>;
								public aggregate(param0: com.google.android.gms.fitness.data.DataType, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public addFilteredDataQualityStandard(param0: number): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public build(): com.google.android.gms.fitness.request.DataReadRequest;
								public aggregate(param0: com.google.android.gms.fitness.data.DataSource, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public constructor();
								public bucketByTime(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public bucketByActivityType(param0: number, param1: java.util.concurrent.TimeUnit, param2: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public bucketBySession(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public setTimeRange(param0: number, param1: number, param2: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public bucketByActivitySegment(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public enableServerQueries(): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public read(param0: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public bucketByActivityType(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public read(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public bucketByActivitySegment(param0: number, param1: java.util.concurrent.TimeUnit, param2: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.fitness.request.DataReadRequest.Builder;
								public setLimit(param0: number): com.google.android.gms.fitness.request.DataReadRequest.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class DataSourcesRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.DataSourcesRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.DataSourcesRequest>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public toString(): string;
							public getDataTypes(): java.util.List<com.google.android.gms.fitness.data.DataType>;
							public constructor(param0: com.google.android.gms.fitness.request.DataSourcesRequest, param1: any /* com.google.android.gms.internal.fitness.zzbk*/);
						}
						export module DataSourcesRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.request.DataSourcesRequest.Builder>;
								public build(): com.google.android.gms.fitness.request.DataSourcesRequest;
								public setDataTypes(param0: androidNative.Array<com.google.android.gms.fitness.data.DataType>): com.google.android.gms.fitness.request.DataSourcesRequest.Builder;
								public setDataSourceTypes(param0: androidNative.Array<number>): com.google.android.gms.fitness.request.DataSourcesRequest.Builder;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class DataTypeCreateRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.DataTypeCreateRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.DataTypeCreateRequest>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: com.google.android.gms.fitness.request.DataTypeCreateRequest, param1: any /* com.google.android.gms.internal.fitness.zzbn*/);
							public getName(): string;
							public getFields(): java.util.List<com.google.android.gms.fitness.data.Field>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module DataTypeCreateRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.request.DataTypeCreateRequest.Builder>;
								public setName(param0: string): com.google.android.gms.fitness.request.DataTypeCreateRequest.Builder;
								public build(): com.google.android.gms.fitness.request.DataTypeCreateRequest;
								public addField(param0: com.google.android.gms.fitness.data.Field): com.google.android.gms.fitness.request.DataTypeCreateRequest.Builder;
								public constructor();
								public addField(param0: string, param1: number): com.google.android.gms.fitness.request.DataTypeCreateRequest.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class DataUpdateListenerRegistrationRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest>;
							public constructor();
							public getDataSource(): com.google.android.gms.fitness.data.DataSource;
							public getDataType(): com.google.android.gms.fitness.data.DataType;
							public constructor(param0: com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest, param1: globalAndroid.os.IBinder);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getIntent(): globalAndroid.app.PendingIntent;
							public constructor(param0: com.google.android.gms.fitness.data.DataSource, param1: com.google.android.gms.fitness.data.DataType, param2: globalAndroid.app.PendingIntent, param3: globalAndroid.os.IBinder);
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module DataUpdateListenerRegistrationRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest.Builder>;
								public setDataType(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest.Builder;
								public setDataSource(param0: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest.Builder;
								public constructor();
								public setPendingIntent(param0: globalAndroid.app.PendingIntent): com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest.Builder;
								public build(): com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class DataUpdateRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.DataUpdateRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.DataUpdateRequest>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: number, param1: number, param2: com.google.android.gms.fitness.data.DataSet, param3: globalAndroid.os.IBinder);
							public getCallbackBinder(): globalAndroid.os.IBinder;
							public getEndTime(param0: java.util.concurrent.TimeUnit): number;
							public getDataSet(): com.google.android.gms.fitness.data.DataSet;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: com.google.android.gms.fitness.request.DataUpdateRequest, param1: globalAndroid.os.IBinder);
							public getStartTime(param0: java.util.concurrent.TimeUnit): number;
						}
						export module DataUpdateRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.request.DataUpdateRequest.Builder>;
								public build(): com.google.android.gms.fitness.request.DataUpdateRequest;
								public setTimeInterval(param0: number, param1: number, param2: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.request.DataUpdateRequest.Builder;
								public setDataSet(param0: com.google.android.gms.fitness.data.DataSet): com.google.android.gms.fitness.request.DataUpdateRequest.Builder;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class GoalsReadRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.GoalsReadRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.GoalsReadRequest>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getObjectiveTypes(): java.util.List<java.lang.Integer>;
							public getActivityNames(): java.util.List<string>;
							public toString(): string;
							public getDataTypes(): java.util.List<com.google.android.gms.fitness.data.DataType>;
							public constructor(param0: com.google.android.gms.fitness.request.GoalsReadRequest, param1: any /* com.google.android.gms.internal.fitness.zzbq*/);
							public equals(param0: any): boolean;
						}
						export module GoalsReadRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.request.GoalsReadRequest.Builder>;
								public addDataType(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.request.GoalsReadRequest.Builder;
								public build(): com.google.android.gms.fitness.request.GoalsReadRequest;
								public addObjectiveType(param0: number): com.google.android.gms.fitness.request.GoalsReadRequest.Builder;
								public constructor();
								public addActivity(param0: string): com.google.android.gms.fitness.request.GoalsReadRequest.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class OnDataPointListener {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.OnDataPointListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.fitness.request.OnDataPointListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDataPoint(param0: com.google.android.gms.fitness.data.DataPoint): void;
							});
							public constructor();
							public onDataPoint(param0: com.google.android.gms.fitness.data.DataPoint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class SensorRequest {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.SensorRequest>;
							public static ACCURACY_MODE_LOW: number;
							public static ACCURACY_MODE_DEFAULT: number;
							public static ACCURACY_MODE_HIGH: number;
							public getDataSource(): com.google.android.gms.fitness.data.DataSource;
							public getDataType(): com.google.android.gms.fitness.data.DataType;
							/** @deprecated */
							public static fromLocationRequest(param0: com.google.android.gms.fitness.data.DataSource, param1: com.google.android.gms.location.LocationRequest): com.google.android.gms.fitness.request.SensorRequest;
							public hashCode(): number;
							public getSamplingRate(param0: java.util.concurrent.TimeUnit): number;
							public getFastestRate(param0: java.util.concurrent.TimeUnit): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public getMaxDeliveryLatency(param0: java.util.concurrent.TimeUnit): number;
							public getAccuracyMode(): number;
						}
						export module SensorRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.request.SensorRequest.Builder>;
								public setDataSource(param0: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.fitness.request.SensorRequest.Builder;
								public setSamplingRate(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.request.SensorRequest.Builder;
								public build(): com.google.android.gms.fitness.request.SensorRequest;
								public setDataType(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.request.SensorRequest.Builder;
								public setMaxDeliveryLatency(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.request.SensorRequest.Builder;
								public setAccuracyMode(param0: number): com.google.android.gms.fitness.request.SensorRequest.Builder;
								public setFastestRate(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.request.SensorRequest.Builder;
								public constructor();
								public setTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.request.SensorRequest.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class SessionInsertRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.SessionInsertRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.SessionInsertRequest>;
							public constructor();
							public constructor(param0: com.google.android.gms.fitness.request.SessionInsertRequest, param1: any /* com.google.android.gms.internal.fitness.zzcq*/);
							public getSession(): com.google.android.gms.fitness.data.Session;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public getDataSets(): java.util.List<com.google.android.gms.fitness.data.DataSet>;
							public getAggregateDataPoints(): java.util.List<com.google.android.gms.fitness.data.DataPoint>;
							public equals(param0: any): boolean;
						}
						export module SessionInsertRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.request.SessionInsertRequest.Builder>;
								public setSession(param0: com.google.android.gms.fitness.data.Session): com.google.android.gms.fitness.request.SessionInsertRequest.Builder;
								public addAggregateDataPoint(param0: com.google.android.gms.fitness.data.DataPoint): com.google.android.gms.fitness.request.SessionInsertRequest.Builder;
								public constructor();
								public addDataSet(param0: com.google.android.gms.fitness.data.DataSet): com.google.android.gms.fitness.request.SessionInsertRequest.Builder;
								public build(): com.google.android.gms.fitness.request.SessionInsertRequest;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class SessionReadRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.SessionReadRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.SessionReadRequest>;
							public constructor();
							public constructor(param0: com.google.android.gms.fitness.request.SessionReadRequest, param1: any /* com.google.android.gms.internal.fitness.zzck*/);
							public getDataSources(): java.util.List<com.google.android.gms.fitness.data.DataSource>;
							public hashCode(): number;
							public getEndTime(param0: java.util.concurrent.TimeUnit): number;
							public getExcludedPackages(): java.util.List<string>;
							public toString(): string;
							public getDataTypes(): java.util.List<com.google.android.gms.fitness.data.DataType>;
							public getStartTime(param0: java.util.concurrent.TimeUnit): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getSessionId(): string;
							public includeSessionsFromAllApps(): boolean;
							public getSessionName(): string;
							public equals(param0: any): boolean;
						}
						export module SessionReadRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.request.SessionReadRequest.Builder>;
								public read(param0: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.fitness.request.SessionReadRequest.Builder;
								public build(): com.google.android.gms.fitness.request.SessionReadRequest;
								public excludePackage(param0: string): com.google.android.gms.fitness.request.SessionReadRequest.Builder;
								public setTimeInterval(param0: number, param1: number, param2: java.util.concurrent.TimeUnit): com.google.android.gms.fitness.request.SessionReadRequest.Builder;
								public setSessionId(param0: string): com.google.android.gms.fitness.request.SessionReadRequest.Builder;
								public constructor();
								public read(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.request.SessionReadRequest.Builder;
								public readSessionsFromAllApps(): com.google.android.gms.fitness.request.SessionReadRequest.Builder;
								public enableServerQueries(): com.google.android.gms.fitness.request.SessionReadRequest.Builder;
								public setSessionName(param0: string): com.google.android.gms.fitness.request.SessionReadRequest.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class StartBleScanRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.StartBleScanRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.StartBleScanRequest>;
							public constructor();
							public constructor(param0: java.util.List<com.google.android.gms.fitness.data.DataType>, param1: any /* com.google.android.gms.fitness.request.zzae*/, param2: number, param3: any /* com.google.android.gms.internal.fitness.zzcq*/);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getTimeoutSecs(): number;
							public toString(): string;
							public getDataTypes(): java.util.List<com.google.android.gms.fitness.data.DataType>;
						}
						export module StartBleScanRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.fitness.request.StartBleScanRequest.Builder>;
								public setBleScanCallback(param0: com.google.android.gms.fitness.request.BleScanCallback): com.google.android.gms.fitness.request.StartBleScanRequest.Builder;
								public setDataTypes(param0: androidNative.Array<com.google.android.gms.fitness.data.DataType>): com.google.android.gms.fitness.request.StartBleScanRequest.Builder;
								public setTimeoutSecs(param0: number): com.google.android.gms.fitness.request.StartBleScanRequest.Builder;
								public constructor();
								public build(): com.google.android.gms.fitness.request.StartBleScanRequest;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzaa extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzaa>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzaa>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: any /* com.google.android.gms.internal.fitness.zzcq*/);
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzab extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzaa>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzab>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzac {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzac>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzad extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.GoalsReadRequest> {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzad>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzae {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzae>;
							/**
							 * Constructs a new instance of the com.google.android.gms.fitness.request.zzae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDeviceFound(param0: com.google.android.gms.fitness.data.BleDevice): void;
								onScanStopped(): void;
							});
							public constructor();
							public onDeviceFound(param0: com.google.android.gms.fitness.data.BleDevice): void;
							public onScanStopped(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export abstract class zzaf extends com.google.android.gms.internal.fitness.zzb implements com.google.android.gms.fitness.request.zzae {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzaf>;
							public constructor();
							public onDeviceFound(param0: com.google.android.gms.fitness.data.BleDevice): void;
							public constructor(param0: string);
							public onScanStopped(): void;
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzag extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.fitness.request.zzae {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzag>;
							public onDeviceFound(param0: com.google.android.gms.fitness.data.BleDevice): void;
							public onScanStopped(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzah extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzah>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzah>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: any /* com.google.android.gms.internal.fitness.zzer*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzai extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzah>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzai>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzaj extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzaj>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzaj>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.google.android.gms.fitness.data.DataType, param1: any /* com.google.android.gms.internal.fitness.zzch*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzak extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzaj>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzak>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzal extends com.google.android.gms.fitness.data.zzu {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzal>;
							public release(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzam extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<com.google.android.gms.fitness.request.OnDataPointListener> {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzam>;
							public onNotifyListenerFailed(): void;
							public notifyListener(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzan {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzan>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzao extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzao>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzao>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: com.google.android.gms.fitness.request.SensorRequest, param1: any /* com.google.android.gms.fitness.data.zzt*/, param2: globalAndroid.app.PendingIntent, param3: any /* com.google.android.gms.internal.fitness.zzcq*/);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzap extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzao>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzap>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzaq {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzaq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzar extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzar>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzar>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public toString(): string;
							public constructor(param0: any /* com.google.android.gms.fitness.data.zzt*/, param1: globalAndroid.app.PendingIntent, param2: any /* com.google.android.gms.internal.fitness.zzcq*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzas extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzar>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzas>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzat {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzat>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzau extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.SessionInsertRequest> {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzau>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzav {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzav>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzaw extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.SessionReadRequest> {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzaw>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzax extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzax>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzax>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: globalAndroid.app.PendingIntent, param1: any /* com.google.android.gms.internal.fitness.zzcq*/, param2: number);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzay extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzax>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzay>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzaz extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzaz>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzaz>*/;
							public constructor();
							public constructor(param0: com.google.android.gms.fitness.data.Session, param1: any /* com.google.android.gms.internal.fitness.zzcq*/);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzba extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzaz>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzba>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbb extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbb>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzbb>*/;
							public constructor();
							public constructor(param0: string, param1: string, param2: any /* com.google.android.gms.internal.fitness.zzcn*/);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbc extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzbb>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbc>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbd extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbd>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzbd>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: globalAndroid.app.PendingIntent, param1: any /* com.google.android.gms.internal.fitness.zzcq*/);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbe extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzbd>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbe>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbf {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbg extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.StartBleScanRequest> {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbg>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbh extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbh>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzbh>*/;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.fitness.request.zzae*/, param1: any /* com.google.android.gms.internal.fitness.zzcq*/);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbi extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzbh>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbi>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbj extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbj>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzbj>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public toString(): string;
							public constructor(param0: com.google.android.gms.fitness.data.Subscription, param1: boolean, param2: any /* com.google.android.gms.internal.fitness.zzcq*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbk extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzbj>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbk>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbl extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbl>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzbl>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public toString(): string;
							public constructor(param0: string, param1: any /* com.google.android.gms.internal.fitness.zzcq*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbm extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzbl>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbm>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbn extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbn>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzbn>*/;
							public constructor();
							public constructor(param0: com.google.android.gms.fitness.data.DataType, param1: com.google.android.gms.fitness.data.DataSource, param2: any /* com.google.android.gms.internal.fitness.zzcq*/);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module request {
						export class zzbo extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.request.zzbn>*/ {
							public static class: java.lang.Class<com.google.android.gms.fitness.request.zzbo>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module result {
						export class BleDevicesResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.fitness.result.BleDevicesResult>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.result.BleDevicesResult>;
							public constructor();
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public constructor(param0: java.util.List<com.google.android.gms.fitness.data.BleDevice>, param1: com.google.android.gms.common.api.Status);
							public getClaimedBleDevices(): java.util.List<com.google.android.gms.fitness.data.BleDevice>;
							public equals(param0: any): boolean;
							public getClaimedBleDevices(param0: com.google.android.gms.fitness.data.DataType): java.util.List<com.google.android.gms.fitness.data.BleDevice>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module result {
						export class DailyTotalResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.fitness.result.DailyTotalResult>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.result.DailyTotalResult>;
							public getTotal(): com.google.android.gms.fitness.data.DataSet;
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module result {
						export class DataReadResponse extends com.google.android.gms.common.api.Response<com.google.android.gms.fitness.result.DataReadResult> {
							public static class: java.lang.Class<com.google.android.gms.fitness.result.DataReadResponse>;
							public constructor();
							public getDataSet(param0: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.fitness.data.DataSet;
							public getBuckets(): java.util.List<com.google.android.gms.fitness.data.Bucket>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public constructor(param0: com.google.android.gms.fitness.result.DataReadResult);
							public getDataSet(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.data.DataSet;
							public getDataSets(): java.util.List<com.google.android.gms.fitness.data.DataSet>;
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module result {
						export class DataReadResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.fitness.result.DataReadResult>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.result.DataReadResult>;
							public getDataSet(param0: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.fitness.data.DataSet;
							public getBuckets(): java.util.List<com.google.android.gms.fitness.data.Bucket>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getDataSet(param0: com.google.android.gms.fitness.data.DataType): com.google.android.gms.fitness.data.DataSet;
							public toString(): string;
							public getDataSets(): java.util.List<com.google.android.gms.fitness.data.DataSet>;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module result {
						export class DataSourcesResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.fitness.result.DataSourcesResult>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.result.DataSourcesResult>;
							public constructor();
							public getDataSources(): java.util.List<com.google.android.gms.fitness.data.DataSource>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: java.util.List<com.google.android.gms.fitness.data.DataSource>, param1: com.google.android.gms.common.api.Status);
							public getDataSources(param0: com.google.android.gms.fitness.data.DataType): java.util.List<com.google.android.gms.fitness.data.DataSource>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module result {
						export class DataTypeResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.fitness.result.DataTypeResult>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.result.DataTypeResult>;
							public constructor();
							public getDataType(): com.google.android.gms.fitness.data.DataType;
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.fitness.data.DataType);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module result {
						export class GoalsResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.fitness.result.GoalsResult>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.result.GoalsResult>;
							public constructor();
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getGoals(): java.util.List<com.google.android.gms.fitness.data.Goal>;
							public constructor(param0: com.google.android.gms.common.api.Status, param1: java.util.List<com.google.android.gms.fitness.data.Goal>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module result {
						export class ListSubscriptionsResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.fitness.result.ListSubscriptionsResult>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.result.ListSubscriptionsResult>;
							public constructor();
							public constructor(param0: java.util.List<com.google.android.gms.fitness.data.Subscription>, param1: com.google.android.gms.common.api.Status);
							public getSubscriptions(param0: com.google.android.gms.fitness.data.DataType): java.util.List<com.google.android.gms.fitness.data.Subscription>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getSubscriptions(): java.util.List<com.google.android.gms.fitness.data.Subscription>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module result {
						export class SessionReadResponse extends com.google.android.gms.common.api.Response<com.google.android.gms.fitness.result.SessionReadResult> {
							public static class: java.lang.Class<com.google.android.gms.fitness.result.SessionReadResponse>;
							public constructor();
							public constructor(param0: com.google.android.gms.fitness.result.SessionReadResult);
							public getStatus(): com.google.android.gms.common.api.Status;
							public getDataSet(param0: com.google.android.gms.fitness.data.Session, param1: com.google.android.gms.fitness.data.DataType): java.util.List<com.google.android.gms.fitness.data.DataSet>;
							public getDataSet(param0: com.google.android.gms.fitness.data.Session): java.util.List<com.google.android.gms.fitness.data.DataSet>;
							public constructor(param0: any);
							public getSessions(): java.util.List<com.google.android.gms.fitness.data.Session>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module result {
						export class SessionReadResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.fitness.result.SessionReadResult>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.result.SessionReadResult>;
							public constructor();
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getDataSet(param0: com.google.android.gms.fitness.data.Session, param1: com.google.android.gms.fitness.data.DataType): java.util.List<com.google.android.gms.fitness.data.DataSet>;
							public hashCode(): number;
							public constructor(param0: java.util.List<com.google.android.gms.fitness.data.Session>, param1: any /* java.util.List<com.google.android.gms.fitness.data.zzae>*/, param2: com.google.android.gms.common.api.Status);
							public toString(): string;
							public getDataSet(param0: com.google.android.gms.fitness.data.Session): java.util.List<com.google.android.gms.fitness.data.DataSet>;
							public equals(param0: any): boolean;
							public getSessions(): java.util.List<com.google.android.gms.fitness.data.Session>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module result {
						export class SessionStopResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.fitness.result.SessionStopResult>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.result.SessionStopResult>;
							public constructor();
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: com.google.android.gms.common.api.Status, param1: java.util.List<com.google.android.gms.fitness.data.Session>);
							public toString(): string;
							public equals(param0: any): boolean;
							public getSessions(): java.util.List<com.google.android.gms.fitness.data.Session>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module service {
						export abstract class FitnessSensorService {
							public static class: java.lang.Class<com.google.android.gms.fitness.service.FitnessSensorService>;
							public static SERVICE_INTERFACE: string;
							public constructor();
							public onCreate(): void;
							public onUnregister(param0: com.google.android.gms.fitness.data.DataSource): boolean;
							public onRegister(param0: com.google.android.gms.fitness.service.FitnessSensorServiceRequest): boolean;
							public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
							public onFindDataSources(param0: java.util.List<com.google.android.gms.fitness.data.DataType>): java.util.List<com.google.android.gms.fitness.data.DataSource>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module service {
						export class FitnessSensorServiceRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.fitness.service.FitnessSensorServiceRequest>;
							public static UNSPECIFIED: number;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.fitness.service.FitnessSensorServiceRequest>;
							public getDataSource(): com.google.android.gms.fitness.data.DataSource;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getSamplingRate(param0: java.util.concurrent.TimeUnit): number;
							public getDispatcher(): com.google.android.gms.fitness.service.SensorEventDispatcher;
							public getBatchInterval(param0: java.util.concurrent.TimeUnit): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module fitness {
					export module service {
						export class SensorEventDispatcher {
							public static class: java.lang.Class<com.google.android.gms.fitness.service.SensorEventDispatcher>;
							/**
							 * Constructs a new instance of the com.google.android.gms.fitness.service.SensorEventDispatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								publish(param0: com.google.android.gms.fitness.data.DataPoint): void;
								publish(param0: java.util.List<com.google.android.gms.fitness.data.DataPoint>): void;
							});
							public constructor();
							public publish(param0: java.util.List<com.google.android.gms.fitness.data.DataPoint>): void;
							public publish(param0: com.google.android.gms.fitness.data.DataPoint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzaa extends com.google.android.gms.internal.auth.zza implements com.google.android.gms.internal.auth.zzz {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzaa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzab extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzab>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.auth.zzab>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzac extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.auth.zzab>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzac>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzad extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzad>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.auth.zzad>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzae extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.auth.zzad>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzae>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzaf extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzaf>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.auth.zzaf>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: androidNative.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzag extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.auth.zzaf>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzag>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzah extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzah>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.auth.zzah>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: globalAndroid.app.PendingIntent);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzai extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.auth.zzah>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzai>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzaj extends com.google.android.gms.internal.auth.zzam {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzaj>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzak extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.auth.zzan>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzak>;
							public getStartServiceAction(): string;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public getServiceDescriptor(): string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.auth.api.AuthProxyOptions, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzal>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.auth.zzal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.auth.api.proxy.ProxyResponse): void;
								zzb(param0: string): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export abstract class zzam extends com.google.android.gms.internal.auth.zzb implements com.google.android.gms.internal.auth.zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzam>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzan {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzan>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.auth.zzan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.auth.zzal*/, param1: com.google.android.gms.auth.api.proxy.ProxyRequest): void;
								zza(param0: any /* com.google.android.gms.internal.auth.zzal*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzao extends com.google.android.gms.internal.auth.zza implements com.google.android.gms.internal.auth.zzan {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzao>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export abstract class zzap extends java.lang.Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<com.google.android.gms.auth.api.proxy.ProxyApi.ProxyResult,com.google.android.gms.internal.auth.zzak>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzap>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export abstract class zzaq extends java.lang.Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<com.google.android.gms.auth.api.proxy.ProxyApi.SpatulaHeaderResult,com.google.android.gms.internal.auth.zzak>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzaq>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzar extends com.google.android.gms.auth.api.proxy.ProxyApi {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzar>;
							public constructor();
							public getSpatulaHeader(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.api.proxy.ProxyApi.SpatulaHeaderResult>;
							public performProxyRequest(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.proxy.ProxyRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.api.proxy.ProxyApi.ProxyResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzas extends com.google.android.gms.internal.auth.zzap {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzas>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzat extends com.google.android.gms.internal.auth.zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzat>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzau extends com.google.android.gms.internal.auth.zzaq {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzau>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzav extends com.google.android.gms.internal.auth.zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzav>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzaw extends com.google.android.gms.auth.api.proxy.ProxyApi.ProxyResult {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzaw>;
							public getResponse(): com.google.android.gms.auth.api.proxy.ProxyResponse;
							public getStatus(): com.google.android.gms.common.api.Status;
							public constructor(param0: com.google.android.gms.common.api.Status);
							public constructor(param0: com.google.android.gms.auth.api.proxy.ProxyResponse);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzax extends com.google.android.gms.auth.api.proxy.ProxyApi.SpatulaHeaderResult {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzax>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public getSpatulaHeader(): string;
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.common.api.Status);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export class zzay {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzay>;
							public static values(): any /* androidNative.Array<com.google.android.gms.internal.auth.zzay>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module auth {
						export abstract class zzaz extends com.google.android.gms.common.server.response.FastSafeParcelableJsonResponse {
							public static class: java.lang.Class<com.google.android.gms.internal.auth.zzaz>;
							public constructor();
							public toByteArray(): androidNative.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzaa extends com.google.android.gms.internal.fitness.zzy<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzaa>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzab extends java.lang.Object /* com.google.android.gms.internal.fitness.zzn<com.google.android.gms.internal.fitness.zzbx>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzab>;
							public requiresAccount(): boolean;
							public getStartServiceAction(): string;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public getServiceDescriptor(): string;
							public isConnecting(): boolean;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getMinApkVersion(): number;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzac {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzac>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzad extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.fitness.zzab,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzad>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzae<R>  extends java.lang.Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.internal.fitness.zzab>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzae<any>>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzaf extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.fitness.zzab,com.google.android.gms.fitness.FitnessOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzaf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzag extends java.lang.Object /* com.google.android.gms.internal.fitness.zzn<com.google.android.gms.internal.fitness.zzbz>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzag>;
							public requiresAccount(): boolean;
							public getStartServiceAction(): string;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public getServiceDescriptor(): string;
							public isConnecting(): boolean;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getMinApkVersion(): number;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzah {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzah>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzai extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.fitness.zzag,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzai>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzaj<R>  extends java.lang.Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.internal.fitness.zzag>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzaj<any>>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzak extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.fitness.zzag,com.google.android.gms.fitness.FitnessOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzak>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzal extends com.google.android.gms.internal.fitness.zzaj<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzal>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzam extends java.lang.Object /* com.google.android.gms.internal.fitness.zzn<com.google.android.gms.internal.fitness.zzcb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzam>;
							public requiresAccount(): boolean;
							public getStartServiceAction(): string;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public getServiceDescriptor(): string;
							public isConnecting(): boolean;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getMinApkVersion(): number;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzan {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzan>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzao extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.fitness.zzam,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzao>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzap<R>  extends java.lang.Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.internal.fitness.zzam>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzap<any>>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzaq extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.fitness.zzam,com.google.android.gms.fitness.FitnessOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzaq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzar extends com.google.android.gms.internal.fitness.zzap<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzar>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzas extends java.lang.Object /* com.google.android.gms.internal.fitness.zzn<com.google.android.gms.internal.fitness.zzcd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzas>;
							public requiresAccount(): boolean;
							public getStartServiceAction(): string;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public getServiceDescriptor(): string;
							public isConnecting(): boolean;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getMinApkVersion(): number;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzat>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzau extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.fitness.zzas,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzau>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzav<R>  extends java.lang.Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.internal.fitness.zzas>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzav<any>>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzaw extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.fitness.zzas,com.google.android.gms.fitness.FitnessOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzaw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzax extends com.google.android.gms.internal.fitness.zzav<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzax>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzay extends java.lang.Object /* com.google.android.gms.internal.fitness.zzn<com.google.android.gms.internal.fitness.zzcf>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzay>;
							public requiresAccount(): boolean;
							public getStartServiceAction(): string;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public getServiceDescriptor(): string;
							public isConnecting(): boolean;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getMinApkVersion(): number;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzaz {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzaz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzba extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.fitness.zzay,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzba>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzbb<R>  extends java.lang.Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.internal.fitness.zzay>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbb<any>>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbc extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.fitness.zzay,com.google.android.gms.fitness.FitnessOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzbd extends com.google.android.gms.internal.fitness.zzbb<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbd>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbe {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbe>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzbe interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.result.DailyTotalResult): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzbf extends com.google.android.gms.internal.fitness.zzb implements com.google.android.gms.internal.fitness.zzbe {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbf>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbg extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzbe {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbh {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzbh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.result.DataReadResult): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzbi extends com.google.android.gms.internal.fitness.zzb implements com.google.android.gms.internal.fitness.zzbh {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbi>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbj extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzbh {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbk {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzbk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.result.DataSourcesResult): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzbl extends com.google.android.gms.internal.fitness.zzb implements com.google.android.gms.internal.fitness.zzbk {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbl>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbm extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzbk {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbn {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzbn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.result.DataTypeResult): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzbo extends com.google.android.gms.internal.fitness.zzb implements com.google.android.gms.internal.fitness.zzbn {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbo>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbp extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzbn {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbq {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzbq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.result.GoalsResult): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzbr extends com.google.android.gms.internal.fitness.zzb implements com.google.android.gms.internal.fitness.zzbq {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbr>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbs extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzbq {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbt {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbt>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzbt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.request.StartBleScanRequest): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzbh*/): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zze*/): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzbl*/): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzah*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbu extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzbt {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbv {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzbv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.request.DataTypeCreateRequest): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzs*/): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzaa*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbw extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzbv {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbx {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzbx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.request.GoalsReadRequest): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzby extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzbx {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzby>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzbz {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzbz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzbz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.request.DataReadRequest): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzk*/): void;
								zza(param0: com.google.android.gms.fitness.request.DataDeleteRequest): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzg*/): void;
								zza(param0: com.google.android.gms.fitness.request.DataUpdateRequest): void;
								zza(param0: com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzw*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzca extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzbz {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzca>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcb {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzcb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.fitness.request.zzbj*/): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzbn*/): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzaj*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcc extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzcb {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcd {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzcd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.request.DataSourcesRequest): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzao*/): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzar*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzce extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzcd {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzce>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcf {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzcf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.fitness.request.zzaz*/): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzbb*/): void;
								zza(param0: com.google.android.gms.fitness.request.SessionInsertRequest): void;
								zza(param0: com.google.android.gms.fitness.request.SessionReadRequest): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzax*/): void;
								zza(param0: any /* com.google.android.gms.fitness.request.zzbd*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcg extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzcf {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzch {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzch>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzch interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.result.ListSubscriptionsResult): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzci extends com.google.android.gms.internal.fitness.zzb implements com.google.android.gms.internal.fitness.zzch {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzci>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcj extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzch {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzck {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzck>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzck interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.result.SessionReadResult): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzcl extends com.google.android.gms.internal.fitness.zzb implements com.google.android.gms.internal.fitness.zzck {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcl>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcm extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzck {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcn {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzcn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.result.SessionStopResult): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzco extends com.google.android.gms.internal.fitness.zzb implements com.google.android.gms.internal.fitness.zzcn {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzco>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcp extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzcn {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcq {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzcq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResult(param0: com.google.android.gms.common.api.Status): void;
							});
							public constructor();
							public onResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzcr extends com.google.android.gms.internal.fitness.zzb implements com.google.android.gms.internal.fitness.zzcq {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcr>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public onResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcs extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzcq {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcs>;
							public onResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzct extends com.google.android.gms.fitness.BleApi {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzct>;
							public constructor();
							public unclaimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public claimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public startBleScan(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.StartBleScanRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public claimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.BleDevice): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public unclaimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.BleDevice): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public listClaimedBleDevices(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.BleDevicesResult>;
							public stopBleScan(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.BleScanCallback): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							/** @deprecated */
							public startBleScan(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.StartBleScanRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcu extends com.google.android.gms.internal.fitness.zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcu>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcv extends com.google.android.gms.internal.fitness.zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcv>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcw extends com.google.android.gms.internal.fitness.zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcw>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcx extends com.google.android.gms.internal.fitness.zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcx>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcy extends com.google.android.gms.internal.fitness.zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcy>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzcz extends com.google.android.gms.internal.fitness.zzs<com.google.android.gms.fitness.result.BleDevicesResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzcz>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzda extends com.google.android.gms.internal.fitness.zzes {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzda>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdb extends com.google.android.gms.fitness.ConfigApi {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdb>;
							public constructor();
							public createCustomDataType(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataTypeCreateRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DataTypeResult>;
							public disableFit(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public readDataType(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DataTypeResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdc extends com.google.android.gms.internal.fitness.zzy<com.google.android.gms.fitness.result.DataTypeResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdc>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdd extends com.google.android.gms.internal.fitness.zzy<com.google.android.gms.fitness.result.DataTypeResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdd>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzde extends com.google.android.gms.internal.fitness.zzaa {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzde>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdf extends com.google.android.gms.internal.fitness.zzbo {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdg extends com.google.android.gms.fitness.GoalsApi {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdg>;
							public constructor();
							public readCurrentGoals(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.GoalsReadRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.GoalsResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdh extends com.google.android.gms.internal.fitness.zzae<com.google.android.gms.fitness.result.GoalsResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdh>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdi extends com.google.android.gms.internal.fitness.zzbr {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdj extends com.google.android.gms.fitness.HistoryApi {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdj>;
							public constructor();
							public readDailyTotal(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DailyTotalResult>;
							public insertData(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataSet): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public readData(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataReadRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DataReadResult>;
							public readDailyTotalFromLocalDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DailyTotalResult>;
							public deleteData(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataDeleteRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public updateData(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataUpdateRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public registerDataUpdateListener(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataUpdateListenerRegistrationRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public unregisterDataUpdateListener(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdk extends com.google.android.gms.internal.fitness.zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdk>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdl extends com.google.android.gms.internal.fitness.zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdl>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdm extends com.google.android.gms.internal.fitness.zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdm>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdn extends com.google.android.gms.internal.fitness.zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdn>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdo extends com.google.android.gms.internal.fitness.zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdo>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdp extends com.google.android.gms.internal.fitness.zzaj<com.google.android.gms.fitness.result.DataReadResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdp>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdq extends com.google.android.gms.internal.fitness.zzaj<com.google.android.gms.fitness.result.DailyTotalResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdq>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdr extends com.google.android.gms.internal.fitness.zzbf {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzds extends com.google.android.gms.internal.fitness.zzbi {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzds>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdt extends com.google.android.gms.fitness.RecordingApi {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdt>;
							public constructor();
							public subscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public subscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public unsubscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.Subscription): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public listSubscriptions(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.ListSubscriptionsResult>;
							public unsubscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public unsubscribe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataSource): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public listSubscriptions(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.DataType): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.ListSubscriptionsResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdu extends com.google.android.gms.internal.fitness.zzap<com.google.android.gms.fitness.result.ListSubscriptionsResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdu>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdv extends com.google.android.gms.internal.fitness.zzap<com.google.android.gms.fitness.result.ListSubscriptionsResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdv>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdw extends com.google.android.gms.internal.fitness.zzar {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdw>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdx extends com.google.android.gms.internal.fitness.zzar {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdx>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdy extends com.google.android.gms.internal.fitness.zzar {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdy>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzdz extends com.google.android.gms.internal.fitness.zzci {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzdz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzea extends com.google.android.gms.fitness.SensorsApi {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzea>;
							public constructor();
							public findDataSources(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.DataSourcesRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.DataSourcesResult>;
							public remove(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public remove(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.OnDataPointListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzeb extends com.google.android.gms.internal.fitness.zzav<com.google.android.gms.fitness.result.DataSourcesResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzeb>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzec extends com.google.android.gms.internal.fitness.zzax {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzec>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzed extends com.google.android.gms.internal.fitness.zzax {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzed>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzee extends com.google.android.gms.fitness.SessionsApi {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzee>;
							public constructor();
							public registerForSessions(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public stopSession(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.SessionStopResult>;
							public insertSession(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.SessionInsertRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public readSession(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.SessionReadRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.SessionReadResult>;
							public unregisterForSessions(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public startSession(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.Session): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzef extends com.google.android.gms.internal.fitness.zzbd {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzef>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzeg extends com.google.android.gms.internal.fitness.zzbb<com.google.android.gms.fitness.result.SessionStopResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzeg>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzeh extends com.google.android.gms.internal.fitness.zzbd {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzeh>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzei extends com.google.android.gms.internal.fitness.zzbb<com.google.android.gms.fitness.result.SessionReadResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzei>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzej extends com.google.android.gms.internal.fitness.zzbd {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzej>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzek extends com.google.android.gms.internal.fitness.zzbd {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzek>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzel extends com.google.android.gms.internal.fitness.zzcl {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzel>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzem extends com.google.android.gms.internal.fitness.zzco {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzem>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzen extends com.google.android.gms.internal.fitness.zzcr {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzen>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
							public constructor(param0: string);
							public onResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzeo extends com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzeo>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzep extends com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzep>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzeq extends com.google.android.gms.fitness.BleApi {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzeq>;
							public constructor();
							public unclaimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public claimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public startBleScan(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.StartBleScanRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public claimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.BleDevice): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public unclaimBleDevice(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.data.BleDevice): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public listClaimedBleDevices(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.fitness.result.BleDevicesResult>;
							public stopBleScan(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.BleScanCallback): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							/** @deprecated */
							public startBleScan(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.fitness.request.StartBleScanRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzer {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzer>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.fitness.result.BleDevicesResult): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzes extends com.google.android.gms.internal.fitness.zzb implements com.google.android.gms.internal.fitness.zzer {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzes>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzet extends com.google.android.gms.internal.fitness.zza implements com.google.android.gms.internal.fitness.zzer {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzet>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzeu extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzeu>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.fitness.zzeu>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: java.util.List<com.google.android.gms.fitness.data.DataType>);
							public toString(): string;
							public getDataTypes(): java.util.List<com.google.android.gms.fitness.data.DataType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzev extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.fitness.zzeu>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzev>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzew extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzew>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.fitness.zzew>*/;
							public constructor();
							public getDataSource(): com.google.android.gms.fitness.data.DataSource;
							public constructor(param0: com.google.android.gms.fitness.data.DataSource);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzex extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.fitness.zzew>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzex>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzey {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzey>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.fitness.zzey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.fitness.zzeu*/, param1: any /* com.google.android.gms.internal.fitness.zzbk*/): void;
								zza(param0: com.google.android.gms.fitness.service.FitnessSensorServiceRequest, param1: any /* com.google.android.gms.internal.fitness.zzcq*/): void;
								zza(param0: any /* com.google.android.gms.internal.fitness.zzew*/, param1: any /* com.google.android.gms.internal.fitness.zzcq*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export abstract class zzez extends com.google.android.gms.internal.fitness.zzb implements com.google.android.gms.internal.fitness.zzey {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzez>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module fitness {
						export class zzfa {
							public static class: java.lang.Class<com.google.android.gms.internal.fitness.zzfa>;
							public static getMimeType(param0: string): string;
							public static getName(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaa extends com.google.android.gms.internal.location.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaa>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzab extends com.google.android.gms.location.LocationServices.zza<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzab>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzac extends com.google.android.gms.internal.location.zzak {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzac>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzad extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzad>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzad>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getStatus(): com.google.android.gms.common.api.Status;
							public constructor(param0: com.google.android.gms.common.api.Status);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzae extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzad>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzae>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaf extends com.google.android.gms.location.GeofencingApi {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaf>;
							public constructor();
							public addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.GeofencingRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<string>): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							/** @deprecated */
							public addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<com.google.android.gms.location.Geofence>, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzag extends com.google.android.gms.internal.location.zzai {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzag>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzah extends com.google.android.gms.internal.location.zzai {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzah>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzai extends com.google.android.gms.location.LocationServices.zza<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzai>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzaj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.location.zzad*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzak extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.internal.location.zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzak>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzal extends com.google.android.gms.internal.location.zza implements com.google.android.gms.internal.location.zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzal>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzam {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzam>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: number, param1: androidNative.Array<string>): void;
								zzb(param0: number, param1: androidNative.Array<string>): void;
								zza(param0: number, param1: globalAndroid.app.PendingIntent): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzan extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.internal.location.zzam {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzan>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzao {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzao>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.location.GeofencingRequest, param1: globalAndroid.app.PendingIntent, param2: any /* com.google.android.gms.internal.location.zzam*/): void;
								zza(param0: any /* com.google.android.gms.location.zzal*/, param1: any /* com.google.android.gms.internal.location.zzam*/): void;
								zza(param0: number, param1: boolean, param2: globalAndroid.app.PendingIntent): void;
								zza(param0: com.google.android.gms.location.ActivityTransitionRequest, param1: globalAndroid.app.PendingIntent, param2: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zza(param0: globalAndroid.app.PendingIntent, param1: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zzb(param0: globalAndroid.app.PendingIntent): void;
								zza(param0: any /* com.google.android.gms.internal.location.zzbf*/): void;
								zza(param0: boolean): void;
								zza(param0: globalAndroid.location.Location): void;
								zza(param0: string): globalAndroid.location.Location;
								zza(param0: any /* com.google.android.gms.internal.location.zzaj*/): void;
								zzb(param0: string): com.google.android.gms.location.LocationAvailability;
								zza(param0: com.google.android.gms.location.LocationSettingsRequest, param1: any /* com.google.android.gms.internal.location.zzaq*/, param2: string): void;
								zza(param0: any /* com.google.android.gms.internal.location.zzo*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzap extends com.google.android.gms.internal.location.zza implements com.google.android.gms.internal.location.zzao {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzap>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaq {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzaq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.location.LocationSettingsResult): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzar extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.internal.location.zzaq {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzar>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzas {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzas>;
							public getLastLocation(): globalAndroid.location.Location;
							public removeAllListeners(): void;
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.internal.location.zzbj<com.google.android.gms.internal.location.zzao>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzat extends com.google.android.gms.location.zzv {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzat>;
							public onLocationResult(param0: com.google.android.gms.location.LocationResult): void;
							public onLocationAvailability(param0: com.google.android.gms.location.LocationAvailability): void;
							public release(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzau extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<com.google.android.gms.location.LocationCallback> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzau>;
							public onNotifyListenerFailed(): void;
							public notifyListener(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzav extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<com.google.android.gms.location.LocationCallback> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzav>;
							public onNotifyListenerFailed(): void;
							public notifyListener(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaw extends com.google.android.gms.location.zzs {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzax extends com.google.android.gms.location.zzy {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzax>;
							public release(): void;
							public onLocationChanged(param0: globalAndroid.location.Location): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzay extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<com.google.android.gms.location.LocationListener> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzay>;
							public onNotifyListenerFailed(): void;
							public notifyListener(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaz extends com.google.android.gms.internal.location.zzk {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaz>;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener, param4: string, param5: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getLastLocation(): globalAndroid.location.Location;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener, param4: string);
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzba extends com.google.android.gms.internal.location.zzan {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzba>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbb extends com.google.android.gms.internal.location.zzan {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbb>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbc extends com.google.android.gms.internal.location.zzar {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbc>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.location.LocationSettingsResult>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbd extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbd>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbd>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbe extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbe>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbf extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbf>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbf>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbg extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbf>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbg>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbh extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.location.Geofence {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbh>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbh>*/;
							public constructor();
							public getRequestId(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbi extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbh>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbi>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbj<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbj<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzbj<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getService(): T;
								checkConnected(): void;
							});
							public constructor();
							public checkConnected(): void;
							public getService(): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbk extends com.google.android.gms.location.SettingsApi {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbk>;
							public constructor();
							public checkLocationSettings(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.location.LocationSettingsResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbl extends com.google.android.gms.location.LocationServices.zza<com.google.android.gms.location.LocationSettingsResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbl>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbm {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityRecognition {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognition>;
						public static CLIENT_NAME: string;
						public static ActivityRecognitionApi: com.google.android.gms.location.ActivityRecognitionApi;
						public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.location.ActivityRecognitionClient;
						public static getClient(param0: globalAndroid.app.Activity): com.google.android.gms.location.ActivityRecognitionClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityRecognitionApi {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognitionApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.ActivityRecognitionApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							requestActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							zza(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.ActivityTransitionRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							zza(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
						public requestActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public removeActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityRecognitionClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognitionClient>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public requestActivityTransitionUpdates(param0: com.google.android.gms.location.ActivityTransitionRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.app.Activity);
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
						public requestActivityUpdates(param0: number, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public removeActivityTransitionUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public removeActivityUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityRecognitionResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognitionResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityRecognitionResult>;
						public constructor();
						public constructor(param0: com.google.android.gms.location.DetectedActivity, param1: number, param2: number);
						public static extractResult(param0: globalAndroid.content.Intent): com.google.android.gms.location.ActivityRecognitionResult;
						public getElapsedRealtimeMillis(): number;
						public constructor(param0: java.util.List<com.google.android.gms.location.DetectedActivity>, param1: number, param2: number, param3: number, param4: globalAndroid.os.Bundle);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getTime(): number;
						public toString(): string;
						public constructor(param0: java.util.List<com.google.android.gms.location.DetectedActivity>, param1: number, param2: number);
						public getActivityConfidence(param0: number): number;
						public static hasResult(param0: globalAndroid.content.Intent): boolean;
						public getMostProbableActivity(): com.google.android.gms.location.DetectedActivity;
						public getProbableActivities(): java.util.List<com.google.android.gms.location.DetectedActivity>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityTransition extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityTransition>;
						public static ACTIVITY_TRANSITION_ENTER: number;
						public static ACTIVITY_TRANSITION_EXIT: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransition>;
						public getTransitionType(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getActivityType(): number;
						public toString(): string;
					}
					export module ActivityTransition {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.location.ActivityTransition.Builder>;
							public constructor();
							public build(): com.google.android.gms.location.ActivityTransition;
							public setActivityType(param0: number): com.google.android.gms.location.ActivityTransition.Builder;
							public setActivityTransition(param0: number): com.google.android.gms.location.ActivityTransition.Builder;
						}
						export class SupportedActivityTransition {
							public static class: java.lang.Class<com.google.android.gms.location.ActivityTransition.SupportedActivityTransition>;
							/**
							 * Constructs a new instance of the com.google.android.gms.location.ActivityTransition$SupportedActivityTransition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityTransitionEvent extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityTransitionEvent>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransitionEvent>;
						public constructor();
						public getTransitionType(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getElapsedRealTimeNanos(): number;
						public constructor(param0: number, param1: number, param2: number);
						public getActivityType(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityTransitionRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityTransitionRequest>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransitionRequest>;
						public static IS_SAME_TRANSITION: java.util.Comparator<com.google.android.gms.location.ActivityTransition>;
						public constructor();
						public serializeToIntentExtra(param0: globalAndroid.content.Intent): void;
						public constructor(param0: java.util.List<com.google.android.gms.location.ActivityTransition>, param1: string, param2: java.util.List<com.google.android.gms.common.internal.ClientIdentity>);
						public constructor(param0: java.util.List<com.google.android.gms.location.ActivityTransition>);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityTransitionResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityTransitionResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransitionResult>;
						public static extractResult(param0: globalAndroid.content.Intent): com.google.android.gms.location.ActivityTransitionResult;
						public constructor();
						public constructor(param0: java.util.List<com.google.android.gms.location.ActivityTransitionEvent>);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public static hasResult(param0: globalAndroid.content.Intent): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getTransitionEvents(): java.util.List<com.google.android.gms.location.ActivityTransitionEvent>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class DetectedActivity extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.DetectedActivity>;
						public static IN_VEHICLE: number;
						public static ON_BICYCLE: number;
						public static ON_FOOT: number;
						public static STILL: number;
						public static UNKNOWN: number;
						public static TILTING: number;
						public static WALKING: number;
						public static RUNNING: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.DetectedActivity>;
						public getConfidence(): number;
						public constructor();
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getType(): number;
						public constructor(param0: number, param1: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class FusedLocationProviderApi {
						public static class: java.lang.Class<com.google.android.gms.location.FusedLocationProviderApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.FusedLocationProviderApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLastLocation(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.location.Location;
							getLocationAvailability(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.location.LocationAvailability;
							requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationCallback, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationCallback): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							setMockMode(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							setMockLocation(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.location.Location): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							flushLocations(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
						public static KEY_MOCK_LOCATION: string;
						public static KEY_LOCATION_CHANGED: string;
						public setMockLocation(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.location.Location): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public getLastLocation(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.location.Location;
						public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationCallback, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public flushLocations(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public getLocationAvailability(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.location.LocationAvailability;
						public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationCallback): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public setMockMode(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class FusedLocationProviderClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.FusedLocationProviderClient>;
						public static KEY_VERTICAL_ACCURACY: string;
						public constructor(param0: globalAndroid.app.Activity);
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
						public flushLocations(): com.google.android.gms.tasks.Task<java.lang.Void>;
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public getLocationAvailability(): com.google.android.gms.tasks.Task<com.google.android.gms.location.LocationAvailability>;
						public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: com.google.android.gms.location.LocationCallback, param2: globalAndroid.os.Looper): com.google.android.gms.tasks.Task<java.lang.Void>;
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public getLastLocation(): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
						public removeLocationUpdates(param0: com.google.android.gms.location.LocationCallback): com.google.android.gms.tasks.Task<java.lang.Void>;
						public setMockLocation(param0: globalAndroid.location.Location): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						public setMockMode(param0: boolean): com.google.android.gms.tasks.Task<java.lang.Void>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class Geofence {
						public static class: java.lang.Class<com.google.android.gms.location.Geofence>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.Geofence interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getRequestId(): string;
						});
						public constructor();
						public static NEVER_EXPIRE: number;
						public static GEOFENCE_TRANSITION_EXIT: number;
						public static GEOFENCE_TRANSITION_ENTER: number;
						public static GEOFENCE_TRANSITION_DWELL: number;
						public getRequestId(): string;
					}
					export module Geofence {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.location.Geofence.Builder>;
							public constructor();
							public setLoiteringDelay(param0: number): com.google.android.gms.location.Geofence.Builder;
							public setExpirationDuration(param0: number): com.google.android.gms.location.Geofence.Builder;
							public setNotificationResponsiveness(param0: number): com.google.android.gms.location.Geofence.Builder;
							public setRequestId(param0: string): com.google.android.gms.location.Geofence.Builder;
							public setCircularRegion(param0: number, param1: number, param2: number): com.google.android.gms.location.Geofence.Builder;
							public setTransitionTypes(param0: number): com.google.android.gms.location.Geofence.Builder;
							public build(): com.google.android.gms.location.Geofence;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofenceStatusCodes extends com.google.android.gms.common.api.CommonStatusCodes {
						public static class: java.lang.Class<com.google.android.gms.location.GeofenceStatusCodes>;
						public static GEOFENCE_NOT_AVAILABLE: number;
						public static GEOFENCE_TOO_MANY_GEOFENCES: number;
						public static GEOFENCE_TOO_MANY_PENDING_INTENTS: number;
						public static getStatusCodeString(param0: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofencingApi {
						public static class: java.lang.Class<com.google.android.gms.location.GeofencingApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.GeofencingApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<com.google.android.gms.location.Geofence>, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.GeofencingRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<string>): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
						public removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<string>): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.GeofencingRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						/** @deprecated */
						public addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<com.google.android.gms.location.Geofence>, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofencingClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.GeofencingClient>;
						public removeGeofences(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public constructor(param0: globalAndroid.app.Activity);
						public constructor(param0: globalAndroid.content.Context);
						public addGeofences(param0: com.google.android.gms.location.GeofencingRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public removeGeofences(param0: java.util.List<string>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofencingEvent {
						public static class: java.lang.Class<com.google.android.gms.location.GeofencingEvent>;
						public static fromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.location.GeofencingEvent;
						public getErrorCode(): number;
						public getTriggeringGeofences(): java.util.List<com.google.android.gms.location.Geofence>;
						public getTriggeringLocation(): globalAndroid.location.Location;
						public getGeofenceTransition(): number;
						public hasError(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofencingRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.GeofencingRequest>;
						public static INITIAL_TRIGGER_ENTER: number;
						public static INITIAL_TRIGGER_EXIT: number;
						public static INITIAL_TRIGGER_DWELL: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.GeofencingRequest>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getGeofences(): java.util.List<com.google.android.gms.location.Geofence>;
						public getInitialTrigger(): number;
						public toString(): string;
					}
					export module GeofencingRequest {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.location.GeofencingRequest.Builder>;
							public constructor();
							public build(): com.google.android.gms.location.GeofencingRequest;
							public addGeofences(param0: java.util.List<com.google.android.gms.location.Geofence>): com.google.android.gms.location.GeofencingRequest.Builder;
							public addGeofence(param0: com.google.android.gms.location.Geofence): com.google.android.gms.location.GeofencingRequest.Builder;
							public setInitialTrigger(param0: number): com.google.android.gms.location.GeofencingRequest.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationAvailability extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.LocationAvailability>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationAvailability>;
						public isLocationAvailable(): boolean;
						public static extractLocationAvailability(param0: globalAndroid.content.Intent): com.google.android.gms.location.LocationAvailability;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static hasLocationAvailability(param0: globalAndroid.content.Intent): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationCallback {
						public static class: java.lang.Class<com.google.android.gms.location.LocationCallback>;
						public onLocationResult(param0: com.google.android.gms.location.LocationResult): void;
						public constructor();
						public onLocationAvailability(param0: com.google.android.gms.location.LocationAvailability): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationListener {
						public static class: java.lang.Class<com.google.android.gms.location.LocationListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.LocationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLocationChanged(param0: globalAndroid.location.Location): void;
						});
						public constructor();
						public onLocationChanged(param0: globalAndroid.location.Location): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.LocationRequest>;
						public static PRIORITY_HIGH_ACCURACY: number;
						public static PRIORITY_BALANCED_POWER_ACCURACY: number;
						public static PRIORITY_LOW_POWER: number;
						public static PRIORITY_NO_POWER: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationRequest>;
						public constructor();
						public setExpirationTime(param0: number): com.google.android.gms.location.LocationRequest;
						public setMaxWaitTime(param0: number): com.google.android.gms.location.LocationRequest;
						public getNumUpdates(): number;
						public setExpirationDuration(param0: number): com.google.android.gms.location.LocationRequest;
						public setFastestInterval(param0: number): com.google.android.gms.location.LocationRequest;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getInterval(): number;
						public getMaxWaitTime(): number;
						public toString(): string;
						public isFastestIntervalExplicitlySet(): boolean;
						public setNumUpdates(param0: number): com.google.android.gms.location.LocationRequest;
						public setInterval(param0: number): com.google.android.gms.location.LocationRequest;
						public setPriority(param0: number): com.google.android.gms.location.LocationRequest;
						public getPriority(): number;
						public setSmallestDisplacement(param0: number): com.google.android.gms.location.LocationRequest;
						public static create(): com.google.android.gms.location.LocationRequest;
						public getSmallestDisplacement(): number;
						public getExpirationTime(): number;
						public getFastestInterval(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.LocationResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationResult>;
						public static extractResult(param0: globalAndroid.content.Intent): com.google.android.gms.location.LocationResult;
						public static create(param0: java.util.List<globalAndroid.location.Location>): com.google.android.gms.location.LocationResult;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static hasResult(param0: globalAndroid.content.Intent): boolean;
						public getLocations(): java.util.List<globalAndroid.location.Location>;
						public getLastLocation(): globalAndroid.location.Location;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationServices {
						public static class: java.lang.Class<com.google.android.gms.location.LocationServices>;
						public static FusedLocationApi: com.google.android.gms.location.FusedLocationProviderApi;
						public static GeofencingApi: com.google.android.gms.location.GeofencingApi;
						public static SettingsApi: com.google.android.gms.location.SettingsApi;
						public static getFusedLocationProviderClient(param0: globalAndroid.content.Context): com.google.android.gms.location.FusedLocationProviderClient;
						public static getFusedLocationProviderClient(param0: globalAndroid.app.Activity): com.google.android.gms.location.FusedLocationProviderClient;
						public static getGeofencingClient(param0: globalAndroid.content.Context): com.google.android.gms.location.GeofencingClient;
						public static getGeofencingClient(param0: globalAndroid.app.Activity): com.google.android.gms.location.GeofencingClient;
						public static getSettingsClient(param0: globalAndroid.content.Context): com.google.android.gms.location.SettingsClient;
						public static getSettingsClient(param0: globalAndroid.app.Activity): com.google.android.gms.location.SettingsClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsRequest>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsRequest>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
					export module LocationSettingsRequest {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsRequest.Builder>;
							public constructor();
							public setAlwaysShow(param0: boolean): com.google.android.gms.location.LocationSettingsRequest.Builder;
							public addAllLocationRequests(param0: java.util.Collection<com.google.android.gms.location.LocationRequest>): com.google.android.gms.location.LocationSettingsRequest.Builder;
							public build(): com.google.android.gms.location.LocationSettingsRequest;
							public setNeedBle(param0: boolean): com.google.android.gms.location.LocationSettingsRequest.Builder;
							public addLocationRequest(param0: com.google.android.gms.location.LocationRequest): com.google.android.gms.location.LocationSettingsRequest.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsResponse extends com.google.android.gms.common.api.Response<com.google.android.gms.location.LocationSettingsResult> {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsResponse>;
						public getLocationSettingsStates(): com.google.android.gms.location.LocationSettingsStates;
						public constructor();
						public constructor(param0: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsResult>;
						public getLocationSettingsStates(): com.google.android.gms.location.LocationSettingsStates;
						public constructor();
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.location.LocationSettingsStates);
						public constructor(param0: com.google.android.gms.common.api.Status);
						public getStatus(): com.google.android.gms.common.api.Status;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsStates extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsStates>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsStates>;
						public isLocationUsable(): boolean;
						public constructor();
						public isLocationPresent(): boolean;
						public isBlePresent(): boolean;
						public isGpsUsable(): boolean;
						public isBleUsable(): boolean;
						public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: boolean);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public isNetworkLocationUsable(): boolean;
						public static fromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.location.LocationSettingsStates;
						public isNetworkLocationPresent(): boolean;
						public isGpsPresent(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsStatusCodes extends com.google.android.gms.common.api.CommonStatusCodes {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsStatusCodes>;
						public static SETTINGS_CHANGE_UNAVAILABLE: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationStatusCodes {
						public static class: java.lang.Class<com.google.android.gms.location.LocationStatusCodes>;
						public static SUCCESS: number;
						public static ERROR: number;
						public static GEOFENCE_NOT_AVAILABLE: number;
						public static GEOFENCE_TOO_MANY_GEOFENCES: number;
						public static GEOFENCE_TOO_MANY_PENDING_INTENTS: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class SettingsApi {
						public static class: java.lang.Class<com.google.android.gms.location.SettingsApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.SettingsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							checkLocationSettings(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.location.LocationSettingsResult>;
						});
						public constructor();
						public checkLocationSettings(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.location.LocationSettingsResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class SettingsClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.SettingsClient>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public constructor(param0: globalAndroid.app.Activity);
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
						public checkLocationSettings(param0: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.tasks.Task<com.google.android.gms.location.LocationSettingsResponse>;
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export module places {
						export class PlaceReport extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.location.places.PlaceReport>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.places.PlaceReport>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public static create(param0: string, param1: string): com.google.android.gms.location.places.PlaceReport;
							public toString(): string;
							public equals(param0: any): boolean;
							public getTag(): string;
							public getPlaceId(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationAvailability> {
						public static class: java.lang.Class<com.google.android.gms.location.zzaa>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationRequest> {
						public static class: java.lang.Class<com.google.android.gms.location.zzab>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzac extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationResult> {
						public static class: java.lang.Class<com.google.android.gms.location.zzac>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzad extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.location.zzaz,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.zzad>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzae extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.zzae>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzae>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzaf extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzae>*/ {
						public static class: java.lang.Class<com.google.android.gms.location.zzaf>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzag extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsRequest> {
						public static class: java.lang.Class<com.google.android.gms.location.zzag>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzah extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsResult> {
						public static class: java.lang.Class<com.google.android.gms.location.zzah>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzai extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsStates> {
						public static class: java.lang.Class<com.google.android.gms.location.zzai>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzaj extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.zzaj>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzaj>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzak extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzaj>*/ {
						public static class: java.lang.Class<com.google.android.gms.location.zzak>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzal extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.zzal>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzal>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzam extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzal>*/ {
						public static class: java.lang.Class<com.google.android.gms.location.zzam>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module security {
					export class ProviderInstaller {
						public static class: java.lang.Class<com.google.android.gms.security.ProviderInstaller>;
						public static PROVIDER_NAME: string;
						public constructor();
						public static installIfNeeded(param0: globalAndroid.content.Context): void;
						public static installIfNeededAsync(param0: globalAndroid.content.Context, param1: com.google.android.gms.security.ProviderInstaller.ProviderInstallListener): void;
					}
					export module ProviderInstaller {
						export class ProviderInstallListener {
							public static class: java.lang.Class<com.google.android.gms.security.ProviderInstaller.ProviderInstallListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.security.ProviderInstaller$ProviderInstallListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onProviderInstalled(): void;
								onProviderInstallFailed(param0: number, param1: globalAndroid.content.Intent): void;
							});
							public constructor();
							public onProviderInstalled(): void;
							public onProviderInstallFailed(param0: number, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class SignInOptions extends com.google.android.gms.common.api.Api.ApiOptions.Optional {
						public static class: java.lang.Class<com.google.android.gms.signin.SignInOptions>;
						public static DEFAULT: com.google.android.gms.signin.SignInOptions;
						public isIdTokenRequested(): boolean;
						public waitForAccessTokenRefresh(): boolean;
						public getServerClientId(): string;
						public isForceCodeForRefreshToken(): boolean;
						public getHostedDomain(): string;
						public isOfflineAccessRequested(): boolean;
						public getAuthApiSignInModuleVersion(): java.lang.Long;
						public getRealClientLibraryVersion(): java.lang.Long;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class SignInClientImpl extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.signin.internal.zaf> implements com.google.android.gms.signin.zad  {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.SignInClientImpl>;
							public getStartServiceAction(): string;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public getServiceDescriptor(): string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public zacv(): void;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public connect(): void;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public static createBundleFromClientSettings(param0: com.google.android.gms.common.internal.ClientSettings): globalAndroid.os.Bundle;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: boolean, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.signin.SignInOptions, param5: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param6: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export abstract class CancellationToken {
						public static class: java.lang.Class<com.google.android.gms.tasks.CancellationToken>;
						public constructor();
						public isCancellationRequested(): boolean;
						public onCanceledRequested(param0: com.google.android.gms.tasks.OnTokenCanceledListener): com.google.android.gms.tasks.CancellationToken;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class CancellationTokenSource {
						public static class: java.lang.Class<com.google.android.gms.tasks.CancellationTokenSource>;
						public constructor();
						public cancel(): void;
						public getToken(): com.google.android.gms.tasks.CancellationToken;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class Continuation<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.Continuation<any,any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.Continuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							then(param0: com.google.android.gms.tasks.Task<TResult>): TContinuationResult;
						});
						public constructor();
						public then(param0: com.google.android.gms.tasks.Task<TResult>): TContinuationResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnCanceledListener {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnCanceledListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCanceled(): void;
						});
						public constructor();
						public onCanceled(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnCompleteListener<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnCompleteListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnCompleteListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
						});
						public constructor();
						public onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnFailureListener {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnFailureListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnFailureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFailure(param0: java.lang.Exception): void;
						});
						public constructor();
						public onFailure(param0: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnSuccessListener<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnSuccessListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnSuccessListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: TResult): void;
						});
						public constructor();
						public onSuccess(param0: TResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnTokenCanceledListener {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnTokenCanceledListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnTokenCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCanceled(): void;
						});
						public constructor();
						public onCanceled(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class RuntimeExecutionException {
						public static class: java.lang.Class<com.google.android.gms.tasks.RuntimeExecutionException>;
						public constructor(param0: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class SuccessContinuation<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.SuccessContinuation<any,any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.SuccessContinuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							then(param0: TResult): com.google.android.gms.tasks.Task<TContinuationResult>;
						});
						public constructor();
						public then(param0: TResult): com.google.android.gms.tasks.Task<TContinuationResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export abstract class Task<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.Task<any>>;
						public addOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
						public continueWithTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnFailureListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
						public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
						public continueWithTask(param0: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
						public addOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
						public continueWith(param0: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public continueWith(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnCanceledListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
						public addOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
						public isSuccessful(): boolean;
						public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
						public addOnSuccessListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
						public addOnCanceledListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
						public onSuccessTask(param0: com.google.android.gms.tasks.SuccessContinuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public constructor();
						public addOnCompleteListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
						public onSuccessTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.SuccessContinuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnCanceledListener(param0: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
						public getResult(): TResult;
						public isComplete(): boolean;
						public isCanceled(): boolean;
						public getResult(param0: java.lang.Class<any>): any;
						public getException(): java.lang.Exception;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class TaskCompletionSource<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.TaskCompletionSource<any>>;
						public trySetResult(param0: TResult): boolean;
						public getTask(): com.google.android.gms.tasks.Task<TResult>;
						public constructor();
						public constructor(param0: com.google.android.gms.tasks.CancellationToken);
						public trySetException(param0: java.lang.Exception): boolean;
						public setException(param0: java.lang.Exception): void;
						public setResult(param0: TResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class TaskExecutors {
						public static class: java.lang.Class<com.google.android.gms.tasks.TaskExecutors>;
						public static MAIN_THREAD: java.util.concurrent.Executor;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class Tasks {
						public static class: java.lang.Class<com.google.android.gms.tasks.Tasks>;
						public static await(param0: com.google.android.gms.tasks.Task<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
						public static forResult(param0: any): com.google.android.gms.tasks.Task<any>;
						public static call(param0: java.util.concurrent.Executor, param1: java.util.concurrent.Callable<any>): com.google.android.gms.tasks.Task<any>;
						public static whenAllSuccess(param0: java.util.Collection<any>): com.google.android.gms.tasks.Task<any>;
						public static whenAll(param0: java.util.Collection<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public static forException(param0: java.lang.Exception): com.google.android.gms.tasks.Task<any>;
						public static await(param0: com.google.android.gms.tasks.Task<any>): any;
						public static whenAllComplete(param0: java.util.Collection<any>): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.tasks.Task<any>>>;
						public static forCanceled(): com.google.android.gms.tasks.Task<any>;
						public static whenAllComplete(param0: androidNative.Array<com.google.android.gms.tasks.Task<any>>): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.tasks.Task<any>>>;
						public static call(param0: java.util.concurrent.Callable<any>): com.google.android.gms.tasks.Task<any>;
						public static whenAll(param0: androidNative.Array<com.google.android.gms.tasks.Task<any>>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public static whenAllSuccess(param0: androidNative.Array<com.google.android.gms.tasks.Task<any>>): com.google.android.gms.tasks.Task<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseApiNotAvailableException extends com.google.firebase.FirebaseException {
				public static class: java.lang.Class<com.google.firebase.FirebaseApiNotAvailableException>;
				/** @deprecated */
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseException {
				public static class: java.lang.Class<com.google.firebase.FirebaseException>;
				/** @deprecated */
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseExceptionMapper extends com.google.android.gms.common.api.internal.StatusExceptionMapper {
				public static class: java.lang.Class<com.google.firebase.FirebaseExceptionMapper>;
				public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
				public constructor();
			}
		}
	}
}

//Generics information:
//com.google.android.gms.common.api.Api.AbstractClientBuilder:2
//com.google.android.gms.common.api.Api.AnyClientKey:1
//com.google.android.gms.common.api.Api.BaseClientBuilder:2
//com.google.android.gms.common.api.Api.ClientKey:1
//com.google.android.gms.common.api.Api.SimpleClient:1
//com.google.android.gms.common.api.BatchResultToken:1
//com.google.android.gms.common.api.DataBufferResponse:2
//com.google.android.gms.common.api.GoogleApi:1
//com.google.android.gms.common.api.OptionalPendingResult:1
//com.google.android.gms.common.api.PendingResult:1
//com.google.android.gms.common.api.ResolvingResultCallbacks:1
//com.google.android.gms.common.api.Response:1
//com.google.android.gms.common.api.ResultCallback:1
//com.google.android.gms.common.api.ResultCallbacks:1
//com.google.android.gms.common.api.ResultTransform:2
//com.google.android.gms.common.api.TransformedResult:1
//com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl:2
//com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder:1
//com.google.android.gms.common.api.internal.BasePendingResult:1
//com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler:1
//com.google.android.gms.common.api.internal.DataHolderNotifier:1
//com.google.android.gms.common.api.internal.ListenerHolder:1
//com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey:1
//com.google.android.gms.common.api.internal.ListenerHolder.Notifier:1
//com.google.android.gms.common.api.internal.OptionalPendingResultImpl:1
//com.google.android.gms.common.api.internal.PendingResultFacade:2
//com.google.android.gms.common.api.internal.RegisterListenerMethod:2
//com.google.android.gms.common.api.internal.RegistrationMethods:2
//com.google.android.gms.common.api.internal.RegistrationMethods.Builder:2
//com.google.android.gms.common.api.internal.RemoteCall:2
//com.google.android.gms.common.api.internal.TaskApiCall:2
//com.google.android.gms.common.api.internal.TaskApiCall.Builder:2
//com.google.android.gms.common.api.internal.UnregisterListenerMethod:2
//com.google.android.gms.common.api.internal.zabp:1
//com.google.android.gms.common.api.internal.zacd:1
//com.google.android.gms.common.api.internal.zacm:1
//com.google.android.gms.common.config.GservicesValue:1
//com.google.android.gms.common.data.AbstractDataBuffer:1
//com.google.android.gms.common.data.DataBuffer:1
//com.google.android.gms.common.data.DataBufferIterator:1
//com.google.android.gms.common.data.DataBufferSafeParcelable:1
//com.google.android.gms.common.data.EntityBuffer:1
//com.google.android.gms.common.data.Freezable:1
//com.google.android.gms.common.data.SingleRefDataBufferIterator:1
//com.google.android.gms.common.internal.BaseGmsClient:1
//com.google.android.gms.common.internal.GmsClient:1
//com.google.android.gms.common.internal.LegacyInternalGmsClient:1
//com.google.android.gms.common.internal.PendingResultUtil.ResultConverter:2
//com.google.android.gms.common.internal.SimpleClientAdapter:1
//com.google.android.gms.common.server.response.FastJsonResponse.Field:2
//com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter:2
//com.google.android.gms.common.server.response.FastParser:1
//com.google.android.gms.common.util.BiConsumer:2
//com.google.android.gms.common.util.Predicate:1
//com.google.android.gms.dynamic.DeferredLifecycleHelper:1
//com.google.android.gms.dynamic.ObjectWrapper:1
//com.google.android.gms.dynamic.OnDelegateCreatedListener:1
//com.google.android.gms.dynamic.RemoteCreator:1
//com.google.android.gms.internal.fitness.zzae:1
//com.google.android.gms.internal.fitness.zzaj:1
//com.google.android.gms.internal.fitness.zzap:1
//com.google.android.gms.internal.fitness.zzav:1
//com.google.android.gms.internal.fitness.zzbb:1
//com.google.android.gms.internal.location.zzbj:1
//com.google.android.gms.tasks.Continuation:2
//com.google.android.gms.tasks.OnCompleteListener:1
//com.google.android.gms.tasks.OnSuccessListener:1
//com.google.android.gms.tasks.SuccessContinuation:2
//com.google.android.gms.tasks.Task:1
//com.google.android.gms.tasks.TaskCompletionSource:1

