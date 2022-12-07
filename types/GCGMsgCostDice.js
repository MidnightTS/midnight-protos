"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgCostDice = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGReason_1 = require("./GCGReason");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgCostDice$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgCostDice", [
            { no: 1, name: "reason", kind: "enum", T: () => ["GCGReason", GCGReason_1.GCGReason] },
            { no: 12, name: "select_dice_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { reason: 0, selectDiceIndexList: [], controllerId: 0 };
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
                case /* GCGReason reason */ 1:
                    message.reason = reader.int32();
                    break;
                case /* repeated uint32 select_dice_index_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.selectDiceIndexList.push(reader.uint32());
                    else
                        message.selectDiceIndexList.push(reader.uint32());
                    break;
                case /* uint32 controller_id */ 7:
                    message.controllerId = reader.uint32();
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
        /* GCGReason reason = 1; */
        if (message.reason !== 0)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.reason);
        /* repeated uint32 select_dice_index_list = 12; */
        if (message.selectDiceIndexList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.selectDiceIndexList.length; i++)
                writer.uint32(message.selectDiceIndexList[i]);
            writer.join();
        }
        /* uint32 controller_id = 7; */
        if (message.controllerId !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgCostDice
 */
exports.GCGMsgCostDice = new GCGMsgCostDice$Type();
