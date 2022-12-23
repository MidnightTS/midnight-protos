"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerTokenRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const StopServerInfo_1 = require("./StopServerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerTokenRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetPlayerTokenRsp", [
            { no: 6, name: "security_cmd_buffer", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 7, name: "gm_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_guest", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 126, name: "Unk3300_AJBBIPFMBEL", kind: "scalar", jsonName: "Unk3300AJBBIPFMBEL", T: 8 /*ScalarType.BOOL*/ },
            { no: 134, name: "key_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1666, name: "sign", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "secret_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "account_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 676, name: "channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "extra_bin_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "secret_key_seed", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1188, name: "server_rand_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1670, name: "cloud_client_ip", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1847, name: "birthday", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1099, name: "tag", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1382, name: "client_ip_str", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1038, name: "sub_channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1152, name: "client_version_random_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 242, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "is_proficient_player", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "platform_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 646, name: "reg_platform", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1897, name: "stop_server", kind: "message", T: () => StopServerInfo_1.StopServerInfo },
            { no: 12, name: "black_uid_end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 746, name: "Unk3300_CFBHAHOHDKC", kind: "scalar", jsonName: "Unk3300CFBHAHOHDKC", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "account_uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1766, name: "finish_collection_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 245, name: "country_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { securityCmdBuffer: new Uint8Array(0), gmUid: 0, isGuest: false, unk3300AJBBIPFMBEL: false, keyId: 0, sign: "", secretKey: "", accountType: 0, channelId: 0, extraBinData: new Uint8Array(0), secretKeySeed: 0n, token: "", serverRandKey: "", cloudClientIp: 0, birthday: "", tag: 0, clientIpStr: "", subChannelId: 0, retcode: 0, clientVersionRandomKey: "", psnId: "", isProficientPlayer: false, platformType: 0, regPlatform: 0, blackUidEndTime: 0, unk3300CFBHAHOHDKC: false, accountUid: "", finishCollectionIdList: [], msg: "", countryCode: "", uid: 0 };
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
                case /* bytes security_cmd_buffer */ 6:
                    message.securityCmdBuffer = reader.bytes();
                    break;
                case /* uint32 gm_uid */ 7:
                    message.gmUid = reader.uint32();
                    break;
                case /* bool is_guest */ 11:
                    message.isGuest = reader.bool();
                    break;
                case /* bool Unk3300_AJBBIPFMBEL = 126 [json_name = "Unk3300AJBBIPFMBEL"];*/ 126:
                    message.unk3300AJBBIPFMBEL = reader.bool();
                    break;
                case /* uint32 key_id */ 134:
                    message.keyId = reader.uint32();
                    break;
                case /* string sign */ 1666:
                    message.sign = reader.string();
                    break;
                case /* string secret_key */ 15:
                    message.secretKey = reader.string();
                    break;
                case /* uint32 account_type */ 8:
                    message.accountType = reader.uint32();
                    break;
                case /* uint32 channel_id */ 676:
                    message.channelId = reader.uint32();
                    break;
                case /* bytes extra_bin_data */ 5:
                    message.extraBinData = reader.bytes();
                    break;
                case /* uint64 secret_key_seed */ 3:
                    message.secretKeySeed = reader.uint64().toBigInt();
                    break;
                case /* string token */ 13:
                    message.token = reader.string();
                    break;
                case /* string server_rand_key */ 1188:
                    message.serverRandKey = reader.string();
                    break;
                case /* uint32 cloud_client_ip */ 1670:
                    message.cloudClientIp = reader.uint32();
                    break;
                case /* string birthday */ 1847:
                    message.birthday = reader.string();
                    break;
                case /* uint32 tag */ 1099:
                    message.tag = reader.uint32();
                    break;
                case /* string client_ip_str */ 1382:
                    message.clientIpStr = reader.string();
                    break;
                case /* uint32 sub_channel_id */ 1038:
                    message.subChannelId = reader.uint32();
                    break;
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* string client_version_random_key */ 1152:
                    message.clientVersionRandomKey = reader.string();
                    break;
                case /* string psn_id */ 242:
                    message.psnId = reader.string();
                    break;
                case /* bool is_proficient_player */ 9:
                    message.isProficientPlayer = reader.bool();
                    break;
                case /* uint32 platform_type */ 10:
                    message.platformType = reader.uint32();
                    break;
                case /* uint32 reg_platform */ 646:
                    message.regPlatform = reader.uint32();
                    break;
                case /* StopServerInfo stop_server */ 1897:
                    message.stopServer = StopServerInfo_1.StopServerInfo.internalBinaryRead(reader, reader.uint32(), options, message.stopServer);
                    break;
                case /* uint32 black_uid_end_time */ 12:
                    message.blackUidEndTime = reader.uint32();
                    break;
                case /* bool Unk3300_CFBHAHOHDKC = 746 [json_name = "Unk3300CFBHAHOHDKC"];*/ 746:
                    message.unk3300CFBHAHOHDKC = reader.bool();
                    break;
                case /* string account_uid */ 1:
                    message.accountUid = reader.string();
                    break;
                case /* repeated uint32 finish_collection_id_list */ 1766:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishCollectionIdList.push(reader.uint32());
                    else
                        message.finishCollectionIdList.push(reader.uint32());
                    break;
                case /* string msg */ 4:
                    message.msg = reader.string();
                    break;
                case /* string country_code */ 245:
                    message.countryCode = reader.string();
                    break;
                case /* uint32 uid */ 14:
                    message.uid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bytes security_cmd_buffer = 6; */
        if (message.securityCmdBuffer.length)
            writer.tag(6, runtime_2.WireType.LengthDelimited).bytes(message.securityCmdBuffer);
        /* uint32 gm_uid = 7; */
        if (message.gmUid !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.gmUid);
        /* bool is_guest = 11; */
        if (message.isGuest !== false)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.isGuest);
        /* bool Unk3300_AJBBIPFMBEL = 126 [json_name = "Unk3300AJBBIPFMBEL"]; */
        if (message.unk3300AJBBIPFMBEL !== false)
            writer.tag(126, runtime_2.WireType.Varint).bool(message.unk3300AJBBIPFMBEL);
        /* uint32 key_id = 134; */
        if (message.keyId !== 0)
            writer.tag(134, runtime_2.WireType.Varint).uint32(message.keyId);
        /* string sign = 1666; */
        if (message.sign !== "")
            writer.tag(1666, runtime_2.WireType.LengthDelimited).string(message.sign);
        /* string secret_key = 15; */
        if (message.secretKey !== "")
            writer.tag(15, runtime_2.WireType.LengthDelimited).string(message.secretKey);
        /* uint32 account_type = 8; */
        if (message.accountType !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.accountType);
        /* uint32 channel_id = 676; */
        if (message.channelId !== 0)
            writer.tag(676, runtime_2.WireType.Varint).uint32(message.channelId);
        /* bytes extra_bin_data = 5; */
        if (message.extraBinData.length)
            writer.tag(5, runtime_2.WireType.LengthDelimited).bytes(message.extraBinData);
        /* uint64 secret_key_seed = 3; */
        if (message.secretKeySeed !== 0n)
            writer.tag(3, runtime_2.WireType.Varint).uint64(message.secretKeySeed);
        /* string token = 13; */
        if (message.token !== "")
            writer.tag(13, runtime_2.WireType.LengthDelimited).string(message.token);
        /* string server_rand_key = 1188; */
        if (message.serverRandKey !== "")
            writer.tag(1188, runtime_2.WireType.LengthDelimited).string(message.serverRandKey);
        /* uint32 cloud_client_ip = 1670; */
        if (message.cloudClientIp !== 0)
            writer.tag(1670, runtime_2.WireType.Varint).uint32(message.cloudClientIp);
        /* string birthday = 1847; */
        if (message.birthday !== "")
            writer.tag(1847, runtime_2.WireType.LengthDelimited).string(message.birthday);
        /* uint32 tag = 1099; */
        if (message.tag !== 0)
            writer.tag(1099, runtime_2.WireType.Varint).uint32(message.tag);
        /* string client_ip_str = 1382; */
        if (message.clientIpStr !== "")
            writer.tag(1382, runtime_2.WireType.LengthDelimited).string(message.clientIpStr);
        /* uint32 sub_channel_id = 1038; */
        if (message.subChannelId !== 0)
            writer.tag(1038, runtime_2.WireType.Varint).uint32(message.subChannelId);
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.retcode);
        /* string client_version_random_key = 1152; */
        if (message.clientVersionRandomKey !== "")
            writer.tag(1152, runtime_2.WireType.LengthDelimited).string(message.clientVersionRandomKey);
        /* string psn_id = 242; */
        if (message.psnId !== "")
            writer.tag(242, runtime_2.WireType.LengthDelimited).string(message.psnId);
        /* bool is_proficient_player = 9; */
        if (message.isProficientPlayer !== false)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isProficientPlayer);
        /* uint32 platform_type = 10; */
        if (message.platformType !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.platformType);
        /* uint32 reg_platform = 646; */
        if (message.regPlatform !== 0)
            writer.tag(646, runtime_2.WireType.Varint).uint32(message.regPlatform);
        /* StopServerInfo stop_server = 1897; */
        if (message.stopServer)
            StopServerInfo_1.StopServerInfo.internalBinaryWrite(message.stopServer, writer.tag(1897, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 black_uid_end_time = 12; */
        if (message.blackUidEndTime !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.blackUidEndTime);
        /* bool Unk3300_CFBHAHOHDKC = 746 [json_name = "Unk3300CFBHAHOHDKC"]; */
        if (message.unk3300CFBHAHOHDKC !== false)
            writer.tag(746, runtime_2.WireType.Varint).bool(message.unk3300CFBHAHOHDKC);
        /* string account_uid = 1; */
        if (message.accountUid !== "")
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.accountUid);
        /* repeated uint32 finish_collection_id_list = 1766; */
        if (message.finishCollectionIdList.length) {
            writer.tag(1766, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishCollectionIdList.length; i++)
                writer.uint32(message.finishCollectionIdList[i]);
            writer.join();
        }
        /* string msg = 4; */
        if (message.msg !== "")
            writer.tag(4, runtime_2.WireType.LengthDelimited).string(message.msg);
        /* string country_code = 245; */
        if (message.countryCode !== "")
            writer.tag(245, runtime_2.WireType.LengthDelimited).string(message.countryCode);
        /* uint32 uid = 14; */
        if (message.uid !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetPlayerTokenRsp
 */
exports.GetPlayerTokenRsp = new GetPlayerTokenRsp$Type();
