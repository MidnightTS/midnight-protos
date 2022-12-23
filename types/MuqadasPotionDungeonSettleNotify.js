"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuqadasPotionDungeonSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MuqadasPotionDungeonSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("MuqadasPotionDungeonSettleNotify", [
            { no: 1, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "capture_weakness_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "final_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isSuccess: false, isNewRecord: false, levelId: 0, captureWeaknessCount: 0, finalScore: 0 };
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
                case /* bool is_success */ 1:
                    message.isSuccess = reader.bool();
                    break;
                case /* bool is_new_record */ 5:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 level_id */ 8:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 capture_weakness_count */ 3:
                    message.captureWeaknessCount = reader.uint32();
                    break;
                case /* uint32 final_score */ 9:
                    message.finalScore = reader.uint32();
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
        /* bool is_success = 1; */
        if (message.isSuccess !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* bool is_new_record = 5; */
        if (message.isNewRecord !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 level_id = 8; */
        if (message.levelId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.levelId);
        /* uint32 capture_weakness_count = 3; */
        if (message.captureWeaknessCount !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.captureWeaknessCount);
        /* uint32 final_score = 9; */
        if (message.finalScore !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.finalScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MuqadasPotionDungeonSettleNotify
 */
exports.MuqadasPotionDungeonSettleNotify = new MuqadasPotionDungeonSettleNotify$Type();
