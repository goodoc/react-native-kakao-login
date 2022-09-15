var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { NativeModules, Platform } from 'react-native';
var RNKakaoLogins = NativeModules.RNKakaoLogins;
export var login = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var restApiKeyWeb, redirectUrlWeb, codeWeb, data_1, queryString, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!(Platform.OS === 'web')) return [3 /*break*/, 2];
                if (!props) {
                    throw new Error('Web parameters are not provided');
                }
                restApiKeyWeb = props.restApiKeyWeb, redirectUrlWeb = props.redirectUrlWeb, codeWeb = props.codeWeb;
                if (!restApiKeyWeb || !redirectUrlWeb || !codeWeb) {
                    throw new Error('Web parameters are not provided');
                }
                data_1 = {
                    grant_type: 'authorization_code',
                    client_id: restApiKeyWeb,
                    redirect_uri: redirectUrlWeb,
                    code: codeWeb,
                };
                queryString = Object.keys(data_1)
                    .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(data_1[k]); })
                    .join('&');
                return [4 /*yield*/, fetch('https://kauth.kakao.com/oauth/token', {
                        method: 'post',
                        body: queryString,
                        headers: {
                            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                        },
                    })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result.json()];
            case 2: return [2 /*return*/, RNKakaoLogins.login()];
            case 3:
                err_1 = _a.sent();
                throw err_1;
            case 4: return [2 /*return*/];
        }
    });
}); };
export var loginWithKakaoAccount = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (Platform.OS === 'web') {
                    throw new Error('Web does not support `loginWithKakaoAccount`');
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, RNKakaoLogins.loginWithKakaoAccount()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result];
            case 3:
                err_2 = _a.sent();
                throw err_2;
            case 4: return [2 /*return*/];
        }
    });
}); };
export var logout = function (tokenWeb) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!(Platform.OS === 'web')) return [3 /*break*/, 2];
                return [4 /*yield*/, fetch('https://kapi.kakao.com/v1/user/logout', {
                        method: 'post',
                        headers: {
                            Authorization: "Bearer ".concat(tokenWeb),
                        },
                    })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result.json()];
            case 2: return [2 /*return*/, RNKakaoLogins.logout()];
            case 3:
                err_3 = _a.sent();
                throw err_3;
            case 4: return [2 /*return*/];
        }
    });
}); };
export var unlink = function (tokenWeb) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!(Platform.OS === 'web')) return [3 /*break*/, 2];
                return [4 /*yield*/, fetch('https://kapi.kakao.com/v1/user/unlink', {
                        method: 'post',
                        headers: {
                            Authorization: "Bearer ".concat(tokenWeb),
                        },
                    })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result.json()];
            case 2: return [2 /*return*/, RNKakaoLogins.unlink()];
            case 3:
                err_4 = _a.sent();
                throw err_4;
            case 4: return [2 /*return*/];
        }
    });
}); };
export var getProfile = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!(Platform.OS === 'web')) return [3 /*break*/, 2];
                return [4 /*yield*/, fetch('https://kapi.kakao.com/v2/user/me', {
                        method: 'get',
                        headers: {
                            Authorization: "Bearer ".concat(token),
                            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                        },
                    })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result.json()];
            case 2: return [2 /*return*/, RNKakaoLogins.getProfile()];
            case 3:
                err_5 = _a.sent();
                throw err_5;
            case 4: return [2 /*return*/];
        }
    });
}); };
export var getAccessToken = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (Platform.OS === 'web') {
                    throw new Error('Web does not support `getAccessToken`');
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, RNKakaoLogins.getAccessToken()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result];
            case 3:
                err_6 = _a.sent();
                throw err_6;
            case 4: return [2 /*return*/];
        }
    });
}); };
