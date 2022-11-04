"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ResVersionConfig_1 = require("./ResVersionConfig");
// @generated message type with reflection information, may provide speed optimized methods
class RegionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RegionInfo", [
            { no: 1, name: "gateserver_ip", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "gateserver_port", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "pay_callback_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "area_type", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "resource_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "data_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "feedback_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "bulletin_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "resource_url_bak", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "data_url_bak", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "client_data_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 16, name: "handbook_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 18, name: "client_silence_data_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "client_data_md5", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 20, name: "client_silence_data_md5", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 22, name: "res_version_config", kind: "message", T: () => ResVersionConfig_1.ResVersionConfig },
            { no: 23, name: "secret_key", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 24, name: "official_community_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 26, name: "client_version_suffix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 27, name: "client_silence_version_suffix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 28, name: "use_gateserver_domain_name", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 29, name: "gateserver_domain_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 30, name: "user_center_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 31, name: "account_bind_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 32, name: "cdkey_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 33, name: "privacy_policy_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 34, name: "next_resource_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 35, name: "next_res_version_config", kind: "message", T: () => ResVersionConfig_1.ResVersionConfig },
            { no: 36, name: "game_biz", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string gateserver_ip */ 1:
                    message.gateserverIp = reader.string();
                    break;
                case /* optional uint32 gateserver_port */ 2:
                    message.gateserverPort = reader.uint32();
                    break;
                case /* optional string pay_callback_url */ 3:
                    message.payCallbackUrl = reader.string();
                    break;
                case /* optional string area_type */ 7:
                    message.areaType = reader.string();
                    break;
                case /* optional string resource_url */ 8:
                    message.resourceUrl = reader.string();
                    break;
                case /* optional string data_url */ 9:
                    message.dataUrl = reader.string();
                    break;
                case /* optional string feedback_url */ 10:
                    message.feedbackUrl = reader.string();
                    break;
                case /* optional string bulletin_url */ 11:
                    message.bulletinUrl = reader.string();
                    break;
                case /* optional string resource_url_bak */ 12:
                    message.resourceUrlBak = reader.string();
                    break;
                case /* optional string data_url_bak */ 13:
                    message.dataUrlBak = reader.string();
                    break;
                case /* optional uint32 client_data_version */ 14:
                    message.clientDataVersion = reader.uint32();
                    break;
                case /* optional string handbook_url */ 16:
                    message.handbookUrl = reader.string();
                    break;
                case /* optional uint32 client_silence_data_version */ 18:
                    message.clientSilenceDataVersion = reader.uint32();
                    break;
                case /* optional string client_data_md5 */ 19:
                    message.clientDataMd5 = reader.string();
                    break;
                case /* optional string client_silence_data_md5 */ 20:
                    message.clientSilenceDataMd5 = reader.string();
                    break;
                case /* optional com.midnights.game.ResVersionConfig res_version_config */ 22:
                    message.resVersionConfig = ResVersionConfig_1.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.resVersionConfig);
                    break;
                case /* optional bytes secret_key */ 23:
                    message.secretKey = reader.bytes();
                    break;
                case /* optional string official_community_url */ 24:
                    message.officialCommunityUrl = reader.string();
                    break;
                case /* optional string client_version_suffix */ 26:
                    message.clientVersionSuffix = reader.string();
                    break;
                case /* optional string client_silence_version_suffix */ 27:
                    message.clientSilenceVersionSuffix = reader.string();
                    break;
                case /* optional bool use_gateserver_domain_name */ 28:
                    message.useGateserverDomainName = reader.bool();
                    break;
                case /* optional string gateserver_domain_name */ 29:
                    message.gateserverDomainName = reader.string();
                    break;
                case /* optional string user_center_url */ 30:
                    message.userCenterUrl = reader.string();
                    break;
                case /* optional string account_bind_url */ 31:
                    message.accountBindUrl = reader.string();
                    break;
                case /* optional string cdkey_url */ 32:
                    message.cdkeyUrl = reader.string();
                    break;
                case /* optional string privacy_policy_url */ 33:
                    message.privacyPolicyUrl = reader.string();
                    break;
                case /* optional string next_resource_url */ 34:
                    message.nextResourceUrl = reader.string();
                    break;
                case /* optional com.midnights.game.ResVersionConfig next_res_version_config */ 35:
                    message.nextResVersionConfig = ResVersionConfig_1.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.nextResVersionConfig);
                    break;
                case /* optional string game_biz */ 36:
                    message.gameBiz = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string gateserver_ip = 1; */
        if (message.gateserverIp !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.gateserverIp);
        /* optional uint32 gateserver_port = 2; */
        if (message.gateserverPort !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.gateserverPort);
        /* optional string pay_callback_url = 3; */
        if (message.payCallbackUrl !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.payCallbackUrl);
        /* optional string area_type = 7; */
        if (message.areaType !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.areaType);
        /* optional string resource_url = 8; */
        if (message.resourceUrl !== undefined)
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.resourceUrl);
        /* optional string data_url = 9; */
        if (message.dataUrl !== undefined)
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.dataUrl);
        /* optional string feedback_url = 10; */
        if (message.feedbackUrl !== undefined)
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.feedbackUrl);
        /* optional string bulletin_url = 11; */
        if (message.bulletinUrl !== undefined)
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.bulletinUrl);
        /* optional string resource_url_bak = 12; */
        if (message.resourceUrlBak !== undefined)
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.resourceUrlBak);
        /* optional string data_url_bak = 13; */
        if (message.dataUrlBak !== undefined)
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.dataUrlBak);
        /* optional uint32 client_data_version = 14; */
        if (message.clientDataVersion !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.clientDataVersion);
        /* optional string handbook_url = 16; */
        if (message.handbookUrl !== undefined)
            writer.tag(16, runtime_1.WireType.LengthDelimited).string(message.handbookUrl);
        /* optional uint32 client_silence_data_version = 18; */
        if (message.clientSilenceDataVersion !== undefined)
            writer.tag(18, runtime_1.WireType.Varint).uint32(message.clientSilenceDataVersion);
        /* optional string client_data_md5 = 19; */
        if (message.clientDataMd5 !== undefined)
            writer.tag(19, runtime_1.WireType.LengthDelimited).string(message.clientDataMd5);
        /* optional string client_silence_data_md5 = 20; */
        if (message.clientSilenceDataMd5 !== undefined)
            writer.tag(20, runtime_1.WireType.LengthDelimited).string(message.clientSilenceDataMd5);
        /* optional com.midnights.game.ResVersionConfig res_version_config = 22; */
        if (message.resVersionConfig)
            ResVersionConfig_1.ResVersionConfig.internalBinaryWrite(message.resVersionConfig, writer.tag(22, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bytes secret_key = 23; */
        if (message.secretKey !== undefined)
            writer.tag(23, runtime_1.WireType.LengthDelimited).bytes(message.secretKey);
        /* optional string official_community_url = 24; */
        if (message.officialCommunityUrl !== undefined)
            writer.tag(24, runtime_1.WireType.LengthDelimited).string(message.officialCommunityUrl);
        /* optional string client_version_suffix = 26; */
        if (message.clientVersionSuffix !== undefined)
            writer.tag(26, runtime_1.WireType.LengthDelimited).string(message.clientVersionSuffix);
        /* optional string client_silence_version_suffix = 27; */
        if (message.clientSilenceVersionSuffix !== undefined)
            writer.tag(27, runtime_1.WireType.LengthDelimited).string(message.clientSilenceVersionSuffix);
        /* optional bool use_gateserver_domain_name = 28; */
        if (message.useGateserverDomainName !== undefined)
            writer.tag(28, runtime_1.WireType.Varint).bool(message.useGateserverDomainName);
        /* optional string gateserver_domain_name = 29; */
        if (message.gateserverDomainName !== undefined)
            writer.tag(29, runtime_1.WireType.LengthDelimited).string(message.gateserverDomainName);
        /* optional string user_center_url = 30; */
        if (message.userCenterUrl !== undefined)
            writer.tag(30, runtime_1.WireType.LengthDelimited).string(message.userCenterUrl);
        /* optional string account_bind_url = 31; */
        if (message.accountBindUrl !== undefined)
            writer.tag(31, runtime_1.WireType.LengthDelimited).string(message.accountBindUrl);
        /* optional string cdkey_url = 32; */
        if (message.cdkeyUrl !== undefined)
            writer.tag(32, runtime_1.WireType.LengthDelimited).string(message.cdkeyUrl);
        /* optional string privacy_policy_url = 33; */
        if (message.privacyPolicyUrl !== undefined)
            writer.tag(33, runtime_1.WireType.LengthDelimited).string(message.privacyPolicyUrl);
        /* optional string next_resource_url = 34; */
        if (message.nextResourceUrl !== undefined)
            writer.tag(34, runtime_1.WireType.LengthDelimited).string(message.nextResourceUrl);
        /* optional com.midnights.game.ResVersionConfig next_res_version_config = 35; */
        if (message.nextResVersionConfig)
            ResVersionConfig_1.ResVersionConfig.internalBinaryWrite(message.nextResVersionConfig, writer.tag(35, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional string game_biz = 36; */
        if (message.gameBiz !== undefined)
            writer.tag(36, runtime_1.WireType.LengthDelimited).string(message.gameBiz);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RegionInfo
 */
exports.RegionInfo = new RegionInfo$Type();
