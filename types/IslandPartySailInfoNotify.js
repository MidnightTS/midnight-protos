"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IslandPartySailInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IslandPartySailStage_1 = require("./IslandPartySailStage");
// @generated message type with reflection information, may provide speed optimized methods
class IslandPartySailInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("IslandPartySailInfoNotify", [
            { no: 2, name: "stage", kind: "enum", T: () => ["IslandPartySailStage", IslandPartySailStage_1.IslandPartySailStage, "ISLAND_PARTY_SAIL_STAGE_"] },
            { no: 6, name: "kill_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { stage: 0, killMonsterCount: 0, coin: 0, progress: 0 };
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
                case /* IslandPartySailStage stage */ 2:
                    message.stage = reader.int32();
                    break;
                case /* uint32 kill_monster_count */ 6:
                    message.killMonsterCount = reader.uint32();
                    break;
                case /* uint32 coin */ 14:
                    message.coin = reader.uint32();
                    break;
                case /* uint32 progress */ 9:
                    message.progress = reader.uint32();
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
        /* IslandPartySailStage stage = 2; */
        if (message.stage !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.stage);
        /* uint32 kill_monster_count = 6; */
        if (message.killMonsterCount !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.killMonsterCount);
        /* uint32 coin = 14; */
        if (message.coin !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.coin);
        /* uint32 progress = 9; */
        if (message.progress !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.progress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IslandPartySailInfoNotify
 */
exports.IslandPartySailInfoNotify = new IslandPartySailInfoNotify$Type();
