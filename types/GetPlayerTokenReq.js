"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerTokenReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerTokenReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GetPlayerTokenReq", [
            { no: 10, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1735, name: "cloud_client_ip", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "platform_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_guest", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "account_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 400, name: "client_rand_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "Unk3300_PHNOHCKIHIA", kind: "scalar", jsonName: "Unk3300PHNOHCKIHIA", T: 9 /*ScalarType.STRING*/ },
            { no: 1548, name: "lang", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_PKONAOIDNFK", kind: "scalar", jsonName: "Unk3300PKONAOIDNFK", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "Unk3300_PMGFBMJNNCL", kind: "scalar", jsonName: "Unk3300PMGFBMJNNCL", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1175, name: "key_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "account_uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "client_ip_str", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "account_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "country_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 292, name: "birthday", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "sub_channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, cloudClientIp: 0, platformType: 0, isGuest: false, onlineId: "", accountType: 0, channelId: 0, clientRandKey: "", unk3300PHNOHCKIHIA: "", lang: 0, unk3300PKONAOIDNFK: "", unk3300PMGFBMJNNCL: 0, psnId: "", keyId: 0, accountUid: "", clientIpStr: "", accountToken: "", countryCode: "", birthday: "", subChannelId: 0 };
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
                case /* uint32 uid */ 10:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 cloud_client_ip */ 1735:
                    message.cloudClientIp = reader.uint32();
                    break;
                case /* uint32 platform_type */ 2:
                    message.platformType = reader.uint32();
                    break;
                case /* bool is_guest */ 14:
                    message.isGuest = reader.bool();
                    break;
                case /* string online_id */ 12:
                    message.onlineId = reader.string();
                    break;
                case /* uint32 account_type */ 6:
                    message.accountType = reader.uint32();
                    break;
                case /* uint32 channel_id */ 8:
                    message.channelId = reader.uint32();
                    break;
                case /* string client_rand_key */ 400:
                    message.clientRandKey = reader.string();
                    break;
                case /* string Unk3300_PHNOHCKIHIA = 3 [json_name = "Unk3300PHNOHCKIHIA"];*/ 3:
                    message.unk3300PHNOHCKIHIA = reader.string();
                    break;
                case /* uint32 lang */ 1548:
                    message.lang = reader.uint32();
                    break;
                case /* string Unk3300_PKONAOIDNFK = 13 [json_name = "Unk3300PKONAOIDNFK"];*/ 13:
                    message.unk3300PKONAOIDNFK = reader.string();
                    break;
                case /* uint32 Unk3300_PMGFBMJNNCL = 1 [json_name = "Unk3300PMGFBMJNNCL"];*/ 1:
                    message.unk3300PMGFBMJNNCL = reader.uint32();
                    break;
                case /* string psn_id */ 5:
                    message.psnId = reader.string();
                    break;
                case /* uint32 key_id */ 1175:
                    message.keyId = reader.uint32();
                    break;
                case /* string account_uid */ 4:
                    message.accountUid = reader.string();
                    break;
                case /* string client_ip_str */ 15:
                    message.clientIpStr = reader.string();
                    break;
                case /* string account_token */ 9:
                    message.accountToken = reader.string();
                    break;
                case /* string country_code */ 11:
                    message.countryCode = reader.string();
                    break;
                case /* string birthday */ 292:
                    message.birthday = reader.string();
                    break;
                case /* uint32 sub_channel_id */ 7:
                    message.subChannelId = reader.uint32();
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
        /* uint32 uid = 10; */
        if (message.uid !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.uid);
        /* uint32 cloud_client_ip = 1735; */
        if (message.cloudClientIp !== 0)
            writer.tag(1735, runtime_1.WireType.Varint).uint32(message.cloudClientIp);
        /* uint32 platform_type = 2; */
        if (message.platformType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.platformType);
        /* bool is_guest = 14; */
        if (message.isGuest !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isGuest);
        /* string online_id = 12; */
        if (message.onlineId !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* uint32 account_type = 6; */
        if (message.accountType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.accountType);
        /* uint32 channel_id = 8; */
        if (message.channelId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.channelId);
        /* string client_rand_key = 400; */
        if (message.clientRandKey !== "")
            writer.tag(400, runtime_1.WireType.LengthDelimited).string(message.clientRandKey);
        /* string Unk3300_PHNOHCKIHIA = 3 [json_name = "Unk3300PHNOHCKIHIA"]; */
        if (message.unk3300PHNOHCKIHIA !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.unk3300PHNOHCKIHIA);
        /* uint32 lang = 1548; */
        if (message.lang !== 0)
            writer.tag(1548, runtime_1.WireType.Varint).uint32(message.lang);
        /* string Unk3300_PKONAOIDNFK = 13 [json_name = "Unk3300PKONAOIDNFK"]; */
        if (message.unk3300PKONAOIDNFK !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.unk3300PKONAOIDNFK);
        /* uint32 Unk3300_PMGFBMJNNCL = 1 [json_name = "Unk3300PMGFBMJNNCL"]; */
        if (message.unk3300PMGFBMJNNCL !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300PMGFBMJNNCL);
        /* string psn_id = 5; */
        if (message.psnId !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.psnId);
        /* uint32 key_id = 1175; */
        if (message.keyId !== 0)
            writer.tag(1175, runtime_1.WireType.Varint).uint32(message.keyId);
        /* string account_uid = 4; */
        if (message.accountUid !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.accountUid);
        /* string client_ip_str = 15; */
        if (message.clientIpStr !== "")
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.clientIpStr);
        /* string account_token = 9; */
        if (message.accountToken !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.accountToken);
        /* string country_code = 11; */
        if (message.countryCode !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.countryCode);
        /* string birthday = 292; */
        if (message.birthday !== "")
            writer.tag(292, runtime_1.WireType.LengthDelimited).string(message.birthday);
        /* uint32 sub_channel_id = 7; */
        if (message.subChannelId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.subChannelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetPlayerTokenReq
 */
exports.GetPlayerTokenReq = new GetPlayerTokenReq$Type();
