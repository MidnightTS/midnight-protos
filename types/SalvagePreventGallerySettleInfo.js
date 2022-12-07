"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalvagePreventGallerySettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SalvagePreventStopReason_1 = require("./SalvagePreventStopReason");
// @generated message type with reflection information, may provide speed optimized methods
class SalvagePreventGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SalvagePreventGallerySettleInfo", [
            { no: 2, name: "monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "reason", kind: "enum", T: () => ["SalvagePreventStopReason", SalvagePreventStopReason_1.SalvagePreventStopReason, "SALVAGE_PREVENT_STOP_REASON_"] },
            { no: 4, name: "final_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "time_remain", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { monsterCount: 0, reason: 0, finalScore: 0, timeRemain: 0 };
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
                case /* uint32 monster_count */ 2:
                    message.monsterCount = reader.uint32();
                    break;
                case /* SalvagePreventStopReason reason */ 11:
                    message.reason = reader.int32();
                    break;
                case /* uint32 final_score */ 4:
                    message.finalScore = reader.uint32();
                    break;
                case /* uint32 time_remain */ 8:
                    message.timeRemain = reader.uint32();
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
        /* uint32 monster_count = 2; */
        if (message.monsterCount !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.monsterCount);
        /* SalvagePreventStopReason reason = 11; */
        if (message.reason !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.reason);
        /* uint32 final_score = 4; */
        if (message.finalScore !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.finalScore);
        /* uint32 time_remain = 8; */
        if (message.timeRemain !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.timeRemain);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SalvagePreventGallerySettleInfo
 */
exports.SalvagePreventGallerySettleInfo = new SalvagePreventGallerySettleInfo$Type();
