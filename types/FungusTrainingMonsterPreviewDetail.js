"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungusTrainingMonsterPreviewDetail = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FungusTrainingMonsterPreviewDetail$Type extends runtime_5.MessageType {
    constructor() {
        super("FungusTrainingMonsterPreviewDetail", [
            { no: 12, name: "monster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "affix_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { monsterId: 0, level: 0, affixList: [] };
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
                case /* uint32 monster_id */ 12:
                    message.monsterId = reader.uint32();
                    break;
                case /* uint32 level */ 8:
                    message.level = reader.uint32();
                    break;
                case /* repeated uint32 affix_list */ 9:
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
        /* uint32 monster_id = 12; */
        if (message.monsterId !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.monsterId);
        /* uint32 level = 8; */
        if (message.level !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.level);
        /* repeated uint32 affix_list = 9; */
        if (message.affixList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
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
 * @generated MessageType for protobuf message FungusTrainingMonsterPreviewDetail
 */
exports.FungusTrainingMonsterPreviewDetail = new FungusTrainingMonsterPreviewDetail$Type();
