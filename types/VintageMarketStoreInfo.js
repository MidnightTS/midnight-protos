"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageMarketStoreInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class VintageMarketStoreInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageMarketStoreInfo", [
            { no: 13, name: "store_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_HNBGHCCENIA", kind: "scalar", jsonName: "Unk3300HNBGHCCENIA", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "strategy_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_ODLLANKOEND", kind: "scalar", jsonName: "Unk3300ODLLANKOEND", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "slot_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { storeId: 0, unk3300HNBGHCCENIA: [], strategyList: [], unk3300ODLLANKOEND: [], slotCount: 0 };
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
                case /* uint32 store_id */ 13:
                    message.storeId = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_HNBGHCCENIA = 1 [json_name = "Unk3300HNBGHCCENIA"];*/ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300HNBGHCCENIA.push(reader.uint32());
                    else
                        message.unk3300HNBGHCCENIA.push(reader.uint32());
                    break;
                case /* repeated uint32 strategy_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.strategyList.push(reader.uint32());
                    else
                        message.strategyList.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_ODLLANKOEND = 7 [json_name = "Unk3300ODLLANKOEND"];*/ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300ODLLANKOEND.push(reader.uint32());
                    else
                        message.unk3300ODLLANKOEND.push(reader.uint32());
                    break;
                case /* uint32 slot_count */ 5:
                    message.slotCount = reader.uint32();
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
        /* uint32 store_id = 13; */
        if (message.storeId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.storeId);
        /* repeated uint32 Unk3300_HNBGHCCENIA = 1 [json_name = "Unk3300HNBGHCCENIA"]; */
        if (message.unk3300HNBGHCCENIA.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300HNBGHCCENIA.length; i++)
                writer.uint32(message.unk3300HNBGHCCENIA[i]);
            writer.join();
        }
        /* repeated uint32 strategy_list = 10; */
        if (message.strategyList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.strategyList.length; i++)
                writer.uint32(message.strategyList[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_ODLLANKOEND = 7 [json_name = "Unk3300ODLLANKOEND"]; */
        if (message.unk3300ODLLANKOEND.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300ODLLANKOEND.length; i++)
                writer.uint32(message.unk3300ODLLANKOEND[i]);
            writer.join();
        }
        /* uint32 slot_count = 5; */
        if (message.slotCount !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.slotCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageMarketStoreInfo
 */
exports.VintageMarketStoreInfo = new VintageMarketStoreInfo$Type();
