"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerLoginReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AdjustTrackingInfo_1 = require("./AdjustTrackingInfo");
const TrackingIOInfo_1 = require("./TrackingIOInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLoginReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerLoginReq", [
            { no: 5, name: "device_uuid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2046, name: "extra_bin_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "platform", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1334, name: "checksum", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1565, name: "channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2040, name: "client_verison_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "language_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 847, name: "client_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "account_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 868, name: "Unk3300_BBAABEHNFOE", kind: "scalar", jsonName: "Unk3300BBAABEHNFOE", T: 9 /*ScalarType.STRING*/ },
            { no: 577, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 82, name: "Unk3300_PMGFBMJNNCL", kind: "scalar", jsonName: "Unk3300PMGFBMJNNCL", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "device_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 875, name: "birthday", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 525, name: "tag", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "account_uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "device_info", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1458, name: "Unk3300_IADFJHNFKIB", kind: "scalar", jsonName: "Unk3300IADFJHNFKIB", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_editor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 424, name: "reg_platform", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 581, name: "checksum_client_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 85, name: "Unk3300_OOBHAIIIPHH", kind: "scalar", jsonName: "Unk3300OOBHAIIIPHH", T: 13 /*ScalarType.UINT32*/ },
            { no: 1320, name: "Unk3300_NDLANBEIGEG", kind: "scalar", jsonName: "Unk3300NDLANBEIGEG", T: 13 /*ScalarType.UINT32*/ },
            { no: 104, name: "country_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1790, name: "Unk3300_PIPLDEAPMMN", kind: "scalar", jsonName: "Unk3300PIPLDEAPMMN", T: 13 /*ScalarType.UINT32*/ },
            { no: 1713, name: "tracking_io_info", kind: "message", T: () => TrackingIOInfo_1.TrackingIOInfo },
            { no: 624, name: "is_transfer", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 828, name: "Unk3300_BIAKNIALBFJ", kind: "scalar", jsonName: "Unk3300BIAKNIALBFJ", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "client_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "is_guest", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "system_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 899, name: "target_home_owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1146, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 874, name: "security_cmd_reply", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 1028, name: "Unk3300_OFFHPAFIFGD", kind: "scalar", jsonName: "Unk3300OFFHPAFIFGD", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "login_rand", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 64, name: "adjust_tracking_info", kind: "message", T: () => AdjustTrackingInfo_1.AdjustTrackingInfo },
            { no: 256, name: "environment_error_code", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "platform_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1983, name: "cps", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { deviceUuid: "", targetUid: 0, extraBinData: new Uint8Array(0), platform: "", checksum: "", channelId: 0, clientVerisonHash: "", languageType: 0, clientDataVersion: 0, accountType: 0, unk3300BBAABEHNFOE: "", onlineId: "", unk3300PMGFBMJNNCL: 0, deviceName: "", birthday: "", tag: 0, accountUid: "", deviceInfo: "", unk3300IADFJHNFKIB: 0, isEditor: false, token: "", regPlatform: 0, checksumClientVersion: "", unk3300OOBHAIIIPHH: 0, unk3300NDLANBEIGEG: 0, countryCode: "", unk3300PIPLDEAPMMN: 0, isTransfer: false, unk3300BIAKNIALBFJ: "", clientVersion: "", isGuest: false, systemVersion: "", targetHomeOwnerUid: 0, psnId: "", securityCmdReply: new Uint8Array(0), unk3300OFFHPAFIFGD: 0, loginRand: 0n, environmentErrorCode: new Uint8Array(0), platformType: 0, cps: "" };
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
                case /* string device_uuid */ 5:
                    message.deviceUuid = reader.string();
                    break;
                case /* uint32 target_uid */ 10:
                    message.targetUid = reader.uint32();
                    break;
                case /* bytes extra_bin_data */ 2046:
                    message.extraBinData = reader.bytes();
                    break;
                case /* string platform */ 4:
                    message.platform = reader.string();
                    break;
                case /* string checksum */ 1334:
                    message.checksum = reader.string();
                    break;
                case /* uint32 channel_id */ 1565:
                    message.channelId = reader.uint32();
                    break;
                case /* string client_verison_hash */ 2040:
                    message.clientVerisonHash = reader.string();
                    break;
                case /* uint32 language_type */ 11:
                    message.languageType = reader.uint32();
                    break;
                case /* uint32 client_data_version */ 847:
                    message.clientDataVersion = reader.uint32();
                    break;
                case /* uint32 account_type */ 7:
                    message.accountType = reader.uint32();
                    break;
                case /* string Unk3300_BBAABEHNFOE = 868 [json_name = "Unk3300BBAABEHNFOE"];*/ 868:
                    message.unk3300BBAABEHNFOE = reader.string();
                    break;
                case /* string online_id */ 577:
                    message.onlineId = reader.string();
                    break;
                case /* uint32 Unk3300_PMGFBMJNNCL = 82 [json_name = "Unk3300PMGFBMJNNCL"];*/ 82:
                    message.unk3300PMGFBMJNNCL = reader.uint32();
                    break;
                case /* string device_name */ 12:
                    message.deviceName = reader.string();
                    break;
                case /* string birthday */ 875:
                    message.birthday = reader.string();
                    break;
                case /* uint32 tag */ 525:
                    message.tag = reader.uint32();
                    break;
                case /* string account_uid */ 14:
                    message.accountUid = reader.string();
                    break;
                case /* string device_info */ 15:
                    message.deviceInfo = reader.string();
                    break;
                case /* uint32 Unk3300_IADFJHNFKIB = 1458 [json_name = "Unk3300IADFJHNFKIB"];*/ 1458:
                    message.unk3300IADFJHNFKIB = reader.uint32();
                    break;
                case /* bool is_editor */ 1:
                    message.isEditor = reader.bool();
                    break;
                case /* string token */ 8:
                    message.token = reader.string();
                    break;
                case /* uint32 reg_platform */ 424:
                    message.regPlatform = reader.uint32();
                    break;
                case /* string checksum_client_version */ 581:
                    message.checksumClientVersion = reader.string();
                    break;
                case /* uint32 Unk3300_OOBHAIIIPHH = 85 [json_name = "Unk3300OOBHAIIIPHH"];*/ 85:
                    message.unk3300OOBHAIIIPHH = reader.uint32();
                    break;
                case /* uint32 Unk3300_NDLANBEIGEG = 1320 [json_name = "Unk3300NDLANBEIGEG"];*/ 1320:
                    message.unk3300NDLANBEIGEG = reader.uint32();
                    break;
                case /* string country_code */ 104:
                    message.countryCode = reader.string();
                    break;
                case /* uint32 Unk3300_PIPLDEAPMMN = 1790 [json_name = "Unk3300PIPLDEAPMMN"];*/ 1790:
                    message.unk3300PIPLDEAPMMN = reader.uint32();
                    break;
                case /* TrackingIOInfo tracking_io_info */ 1713:
                    message.trackingIoInfo = TrackingIOInfo_1.TrackingIOInfo.internalBinaryRead(reader, reader.uint32(), options, message.trackingIoInfo);
                    break;
                case /* bool is_transfer */ 624:
                    message.isTransfer = reader.bool();
                    break;
                case /* string Unk3300_BIAKNIALBFJ = 828 [json_name = "Unk3300BIAKNIALBFJ"];*/ 828:
                    message.unk3300BIAKNIALBFJ = reader.string();
                    break;
                case /* string client_version */ 2:
                    message.clientVersion = reader.string();
                    break;
                case /* bool is_guest */ 13:
                    message.isGuest = reader.bool();
                    break;
                case /* string system_version */ 6:
                    message.systemVersion = reader.string();
                    break;
                case /* uint32 target_home_owner_uid */ 899:
                    message.targetHomeOwnerUid = reader.uint32();
                    break;
                case /* string psn_id */ 1146:
                    message.psnId = reader.string();
                    break;
                case /* bytes security_cmd_reply */ 874:
                    message.securityCmdReply = reader.bytes();
                    break;
                case /* uint32 Unk3300_OFFHPAFIFGD = 1028 [json_name = "Unk3300OFFHPAFIFGD"];*/ 1028:
                    message.unk3300OFFHPAFIFGD = reader.uint32();
                    break;
                case /* uint64 login_rand */ 9:
                    message.loginRand = reader.uint64().toBigInt();
                    break;
                case /* AdjustTrackingInfo adjust_tracking_info */ 64:
                    message.adjustTrackingInfo = AdjustTrackingInfo_1.AdjustTrackingInfo.internalBinaryRead(reader, reader.uint32(), options, message.adjustTrackingInfo);
                    break;
                case /* bytes environment_error_code */ 256:
                    message.environmentErrorCode = reader.bytes();
                    break;
                case /* uint32 platform_type */ 3:
                    message.platformType = reader.uint32();
                    break;
                case /* string cps */ 1983:
                    message.cps = reader.string();
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
        /* string device_uuid = 5; */
        if (message.deviceUuid !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.deviceUuid);
        /* uint32 target_uid = 10; */
        if (message.targetUid !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* bytes extra_bin_data = 2046; */
        if (message.extraBinData.length)
            writer.tag(2046, runtime_1.WireType.LengthDelimited).bytes(message.extraBinData);
        /* string platform = 4; */
        if (message.platform !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.platform);
        /* string checksum = 1334; */
        if (message.checksum !== "")
            writer.tag(1334, runtime_1.WireType.LengthDelimited).string(message.checksum);
        /* uint32 channel_id = 1565; */
        if (message.channelId !== 0)
            writer.tag(1565, runtime_1.WireType.Varint).uint32(message.channelId);
        /* string client_verison_hash = 2040; */
        if (message.clientVerisonHash !== "")
            writer.tag(2040, runtime_1.WireType.LengthDelimited).string(message.clientVerisonHash);
        /* uint32 language_type = 11; */
        if (message.languageType !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.languageType);
        /* uint32 client_data_version = 847; */
        if (message.clientDataVersion !== 0)
            writer.tag(847, runtime_1.WireType.Varint).uint32(message.clientDataVersion);
        /* uint32 account_type = 7; */
        if (message.accountType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.accountType);
        /* string Unk3300_BBAABEHNFOE = 868 [json_name = "Unk3300BBAABEHNFOE"]; */
        if (message.unk3300BBAABEHNFOE !== "")
            writer.tag(868, runtime_1.WireType.LengthDelimited).string(message.unk3300BBAABEHNFOE);
        /* string online_id = 577; */
        if (message.onlineId !== "")
            writer.tag(577, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* uint32 Unk3300_PMGFBMJNNCL = 82 [json_name = "Unk3300PMGFBMJNNCL"]; */
        if (message.unk3300PMGFBMJNNCL !== 0)
            writer.tag(82, runtime_1.WireType.Varint).uint32(message.unk3300PMGFBMJNNCL);
        /* string device_name = 12; */
        if (message.deviceName !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.deviceName);
        /* string birthday = 875; */
        if (message.birthday !== "")
            writer.tag(875, runtime_1.WireType.LengthDelimited).string(message.birthday);
        /* uint32 tag = 525; */
        if (message.tag !== 0)
            writer.tag(525, runtime_1.WireType.Varint).uint32(message.tag);
        /* string account_uid = 14; */
        if (message.accountUid !== "")
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.accountUid);
        /* string device_info = 15; */
        if (message.deviceInfo !== "")
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.deviceInfo);
        /* uint32 Unk3300_IADFJHNFKIB = 1458 [json_name = "Unk3300IADFJHNFKIB"]; */
        if (message.unk3300IADFJHNFKIB !== 0)
            writer.tag(1458, runtime_1.WireType.Varint).uint32(message.unk3300IADFJHNFKIB);
        /* bool is_editor = 1; */
        if (message.isEditor !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isEditor);
        /* string token = 8; */
        if (message.token !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.token);
        /* uint32 reg_platform = 424; */
        if (message.regPlatform !== 0)
            writer.tag(424, runtime_1.WireType.Varint).uint32(message.regPlatform);
        /* string checksum_client_version = 581; */
        if (message.checksumClientVersion !== "")
            writer.tag(581, runtime_1.WireType.LengthDelimited).string(message.checksumClientVersion);
        /* uint32 Unk3300_OOBHAIIIPHH = 85 [json_name = "Unk3300OOBHAIIIPHH"]; */
        if (message.unk3300OOBHAIIIPHH !== 0)
            writer.tag(85, runtime_1.WireType.Varint).uint32(message.unk3300OOBHAIIIPHH);
        /* uint32 Unk3300_NDLANBEIGEG = 1320 [json_name = "Unk3300NDLANBEIGEG"]; */
        if (message.unk3300NDLANBEIGEG !== 0)
            writer.tag(1320, runtime_1.WireType.Varint).uint32(message.unk3300NDLANBEIGEG);
        /* string country_code = 104; */
        if (message.countryCode !== "")
            writer.tag(104, runtime_1.WireType.LengthDelimited).string(message.countryCode);
        /* uint32 Unk3300_PIPLDEAPMMN = 1790 [json_name = "Unk3300PIPLDEAPMMN"]; */
        if (message.unk3300PIPLDEAPMMN !== 0)
            writer.tag(1790, runtime_1.WireType.Varint).uint32(message.unk3300PIPLDEAPMMN);
        /* TrackingIOInfo tracking_io_info = 1713; */
        if (message.trackingIoInfo)
            TrackingIOInfo_1.TrackingIOInfo.internalBinaryWrite(message.trackingIoInfo, writer.tag(1713, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_transfer = 624; */
        if (message.isTransfer !== false)
            writer.tag(624, runtime_1.WireType.Varint).bool(message.isTransfer);
        /* string Unk3300_BIAKNIALBFJ = 828 [json_name = "Unk3300BIAKNIALBFJ"]; */
        if (message.unk3300BIAKNIALBFJ !== "")
            writer.tag(828, runtime_1.WireType.LengthDelimited).string(message.unk3300BIAKNIALBFJ);
        /* string client_version = 2; */
        if (message.clientVersion !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.clientVersion);
        /* bool is_guest = 13; */
        if (message.isGuest !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isGuest);
        /* string system_version = 6; */
        if (message.systemVersion !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.systemVersion);
        /* uint32 target_home_owner_uid = 899; */
        if (message.targetHomeOwnerUid !== 0)
            writer.tag(899, runtime_1.WireType.Varint).uint32(message.targetHomeOwnerUid);
        /* string psn_id = 1146; */
        if (message.psnId !== "")
            writer.tag(1146, runtime_1.WireType.LengthDelimited).string(message.psnId);
        /* bytes security_cmd_reply = 874; */
        if (message.securityCmdReply.length)
            writer.tag(874, runtime_1.WireType.LengthDelimited).bytes(message.securityCmdReply);
        /* uint32 Unk3300_OFFHPAFIFGD = 1028 [json_name = "Unk3300OFFHPAFIFGD"]; */
        if (message.unk3300OFFHPAFIFGD !== 0)
            writer.tag(1028, runtime_1.WireType.Varint).uint32(message.unk3300OFFHPAFIFGD);
        /* uint64 login_rand = 9; */
        if (message.loginRand !== 0n)
            writer.tag(9, runtime_1.WireType.Varint).uint64(message.loginRand);
        /* AdjustTrackingInfo adjust_tracking_info = 64; */
        if (message.adjustTrackingInfo)
            AdjustTrackingInfo_1.AdjustTrackingInfo.internalBinaryWrite(message.adjustTrackingInfo, writer.tag(64, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bytes environment_error_code = 256; */
        if (message.environmentErrorCode.length)
            writer.tag(256, runtime_1.WireType.LengthDelimited).bytes(message.environmentErrorCode);
        /* uint32 platform_type = 3; */
        if (message.platformType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.platformType);
        /* string cps = 1983; */
        if (message.cps !== "")
            writer.tag(1983, runtime_1.WireType.LengthDelimited).string(message.cps);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerLoginReq
 */
exports.PlayerLoginReq = new PlayerLoginReq$Type();
