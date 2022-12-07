"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BartenderCompleteOrderRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BartenderCompleteOrderRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("BartenderCompleteOrderRsp", [
            { no: 9, name: "formula_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "finish_order_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "is_new", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "affix_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { formulaId: 0, questId: 0, finishOrderId: 0, retcode: 0, isNew: false, affixList: [] };
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
                case /* uint32 formula_id */ 9:
                    message.formulaId = reader.uint32();
                    break;
                case /* uint32 quest_id */ 7:
                    message.questId = reader.uint32();
                    break;
                case /* uint32 finish_order_id */ 6:
                    message.finishOrderId = reader.uint32();
                    break;
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_new */ 8:
                    message.isNew = reader.bool();
                    break;
                case /* repeated uint32 affix_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.affixList.push(reader.uint32());
                    else
                        message.affixList.push(reader.uint32());
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
        /* uint32 formula_id = 9; */
        if (message.formulaId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.formulaId);
        /* uint32 quest_id = 7; */
        if (message.questId !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.questId);
        /* uint32 finish_order_id = 6; */
        if (message.finishOrderId !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.finishOrderId);
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        /* bool is_new = 8; */
        if (message.isNew !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isNew);
        /* repeated uint32 affix_list = 1; */
        if (message.affixList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.affixList.length; i++)
                writer.uint32(message.affixList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BartenderCompleteOrderRsp
 */
exports.BartenderCompleteOrderRsp = new BartenderCompleteOrderRsp$Type();
