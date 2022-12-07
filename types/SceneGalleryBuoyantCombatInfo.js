"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryBuoyantCombatInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryBuoyantCombatInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryBuoyantCombatInfo", [
            { no: 9, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "kill_special_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "kill_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { score: 0, killSpecialMonsterCount: 0, killMonsterCount: 0 };
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
                case /* uint32 score */ 9:
                    message.score = reader.uint32();
                    break;
                case /* uint32 kill_special_monster_count */ 13:
                    message.killSpecialMonsterCount = reader.uint32();
                    break;
                case /* uint32 kill_monster_count */ 12:
                    message.killMonsterCount = reader.uint32();
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
        /* uint32 score = 9; */
        if (message.score !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.score);
        /* uint32 kill_special_monster_count = 13; */
        if (message.killSpecialMonsterCount !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.killSpecialMonsterCount);
        /* uint32 kill_monster_count = 12; */
        if (message.killMonsterCount !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.killMonsterCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryBuoyantCombatInfo
 */
exports.SceneGalleryBuoyantCombatInfo = new SceneGalleryBuoyantCombatInfo$Type();