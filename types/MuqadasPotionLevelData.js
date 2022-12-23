"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuqadasPotionLevelData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MuqadasPotionLevelData$Type extends runtime_5.MessageType {
    constructor() {
        super("MuqadasPotionLevelData", [
            { no: 1, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isOpen: false, levelId: 0, maxScore: 0 };
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
                case /* bool is_open */ 1:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 level_id */ 2:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 max_score */ 9:
                    message.maxScore = reader.uint32();
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
        /* bool is_open = 1; */
        if (message.isOpen !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isOpen);
        /* uint32 level_id = 2; */
        if (message.levelId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.levelId);
        /* uint32 max_score = 9; */
        if (message.maxScore !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.maxScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MuqadasPotionLevelData
 */
exports.MuqadasPotionLevelData = new MuqadasPotionLevelData$Type();
