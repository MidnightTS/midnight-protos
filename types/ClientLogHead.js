"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientLogHead = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ClientLogHead$Type extends runtime_5.MessageType {
    constructor() {
        super("ClientLogHead", [
            { no: 1, name: "event_time", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "log_serial_number", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "action_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "action_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "upload_ip", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "product_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "channel_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "region_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "game_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "device_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "device_uuid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "mac_addr", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "account_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "account_uuid", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { eventTime: "", logSerialNumber: "", actionId: 0, actionName: "", uploadIp: "", productId: "", channelId: "", regionName: "", gameVersion: "", deviceType: "", deviceUuid: "", macAddr: "", accountName: "", accountUuid: "" };
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
                case /* string event_time */ 1:
                    message.eventTime = reader.string();
                    break;
                case /* string log_serial_number */ 2:
                    message.logSerialNumber = reader.string();
                    break;
                case /* uint32 action_id */ 3:
                    message.actionId = reader.uint32();
                    break;
                case /* string action_name */ 4:
                    message.actionName = reader.string();
                    break;
                case /* string upload_ip */ 5:
                    message.uploadIp = reader.string();
                    break;
                case /* string product_id */ 6:
                    message.productId = reader.string();
                    break;
                case /* string channel_id */ 7:
                    message.channelId = reader.string();
                    break;
                case /* string region_name */ 8:
                    message.regionName = reader.string();
                    break;
                case /* string game_version */ 9:
                    message.gameVersion = reader.string();
                    break;
                case /* string device_type */ 10:
                    message.deviceType = reader.string();
                    break;
                case /* string device_uuid */ 11:
                    message.deviceUuid = reader.string();
                    break;
                case /* string mac_addr */ 12:
                    message.macAddr = reader.string();
                    break;
                case /* string account_name */ 13:
                    message.accountName = reader.string();
                    break;
                case /* string account_uuid */ 14:
                    message.accountUuid = reader.string();
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
        /* string event_time = 1; */
        if (message.eventTime !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.eventTime);
        /* string log_serial_number = 2; */
        if (message.logSerialNumber !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.logSerialNumber);
        /* uint32 action_id = 3; */
        if (message.actionId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.actionId);
        /* string action_name = 4; */
        if (message.actionName !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.actionName);
        /* string upload_ip = 5; */
        if (message.uploadIp !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.uploadIp);
        /* string product_id = 6; */
        if (message.productId !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.productId);
        /* string channel_id = 7; */
        if (message.channelId !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.channelId);
        /* string region_name = 8; */
        if (message.regionName !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.regionName);
        /* string game_version = 9; */
        if (message.gameVersion !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.gameVersion);
        /* string device_type = 10; */
        if (message.deviceType !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.deviceType);
        /* string device_uuid = 11; */
        if (message.deviceUuid !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.deviceUuid);
        /* string mac_addr = 12; */
        if (message.macAddr !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.macAddr);
        /* string account_name = 13; */
        if (message.accountName !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.accountName);
        /* string account_uuid = 14; */
        if (message.accountUuid !== "")
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.accountUuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ClientLogHead
 */
exports.ClientLogHead = new ClientLogHead$Type();
