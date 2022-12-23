"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGOperationAttack = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationAttack$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGOperationAttack", [
            { no: 15, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cost_dice_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { skillId: 0, costDiceIndexList: [] };
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
                case /* uint32 skill_id */ 15:
                    message.skillId = reader.uint32();
                    break;
                case /* repeated uint32 cost_dice_index_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.costDiceIndexList.push(reader.uint32());
                    else
                        message.costDiceIndexList.push(reader.uint32());
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
        /* uint32 skill_id = 15; */
        if (message.skillId !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.skillId);
        /* repeated uint32 cost_dice_index_list = 3; */
        if (message.costDiceIndexList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.costDiceIndexList.length; i++)
                writer.uint32(message.costDiceIndexList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGOperationAttack
 */
exports.GCGOperationAttack = new GCGOperationAttack$Type();
