"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityReputationRequestInfo_RequestInfo = exports.CityReputationRequestInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationRequestInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CityReputationRequestInfo", [
            { no: 4, name: "request_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CityReputationRequestInfo_RequestInfo },
            { no: 14, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { requestInfoList: [], isOpen: false };
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
                case /* repeated CityReputationRequestInfo.RequestInfo request_info_list */ 4:
                    message.requestInfoList.push(exports.CityReputationRequestInfo_RequestInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_open */ 14:
                    message.isOpen = reader.bool();
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
        /* repeated CityReputationRequestInfo.RequestInfo request_info_list = 4; */
        for (let i = 0; i < message.requestInfoList.length; i++)
            exports.CityReputationRequestInfo_RequestInfo.internalBinaryWrite(message.requestInfoList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_open = 14; */
        if (message.isOpen !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CityReputationRequestInfo
 */
exports.CityReputationRequestInfo = new CityReputationRequestInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationRequestInfo_RequestInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CityReputationRequestInfo.RequestInfo", [
            { no: 4, name: "is_taken_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "request_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isTakenReward: false, requestId: 0, questId: 0 };
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
                case /* bool is_taken_reward */ 4:
                    message.isTakenReward = reader.bool();
                    break;
                case /* uint32 request_id */ 8:
                    message.requestId = reader.uint32();
                    break;
                case /* uint32 quest_id */ 11:
                    message.questId = reader.uint32();
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
        /* bool is_taken_reward = 4; */
        if (message.isTakenReward !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isTakenReward);
        /* uint32 request_id = 8; */
        if (message.requestId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.requestId);
        /* uint32 quest_id = 11; */
        if (message.questId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CityReputationRequestInfo.RequestInfo
 */
exports.CityReputationRequestInfo_RequestInfo = new CityReputationRequestInfo_RequestInfo$Type();
