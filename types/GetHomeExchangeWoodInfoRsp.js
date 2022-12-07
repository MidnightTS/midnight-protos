"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo = exports.GetHomeExchangeWoodInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GetHomeExchangeWoodInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetHomeExchangeWoodInfoRsp", [
            { no: 7, name: "wood_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo },
            { no: 12, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { woodInfoList: [], retcode: 0 };
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
                case /* repeated GetHomeExchangeWoodInfoRsp.HomeExchangeWoodInfo wood_info_list */ 7:
                    message.woodInfoList.push(exports.GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 12:
                    message.retcode = reader.int32();
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
        /* repeated GetHomeExchangeWoodInfoRsp.HomeExchangeWoodInfo wood_info_list = 7; */
        for (let i = 0; i < message.woodInfoList.length; i++)
            exports.GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo.internalBinaryWrite(message.woodInfoList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 12; */
        if (message.retcode !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetHomeExchangeWoodInfoRsp
 */
exports.GetHomeExchangeWoodInfoRsp = new GetHomeExchangeWoodInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GetHomeExchangeWoodInfoRsp.HomeExchangeWoodInfo", [
            { no: 1, name: "wood_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "exchanged_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "exchange_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { woodId: 0, exchangedCount: 0, nextRefreshTime: 0, exchangeLimit: 0 };
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
                case /* uint32 wood_id */ 1:
                    message.woodId = reader.uint32();
                    break;
                case /* uint32 exchanged_count */ 7:
                    message.exchangedCount = reader.uint32();
                    break;
                case /* uint32 next_refresh_time */ 14:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* uint32 exchange_limit */ 4:
                    message.exchangeLimit = reader.uint32();
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
        /* uint32 wood_id = 1; */
        if (message.woodId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.woodId);
        /* uint32 exchanged_count = 7; */
        if (message.exchangedCount !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.exchangedCount);
        /* uint32 next_refresh_time = 14; */
        if (message.nextRefreshTime !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 exchange_limit = 4; */
        if (message.exchangeLimit !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.exchangeLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetHomeExchangeWoodInfoRsp.HomeExchangeWoodInfo
 */
exports.GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo = new GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo$Type();
