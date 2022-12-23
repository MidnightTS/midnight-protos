"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonReviseLevelNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonReviseLevelNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonReviseLevelNotify", [
            { no: 2, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "revise_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "scene_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonId: 0, reviseLevel: 0, sceneLevel: 0 };
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
                case /* uint32 dungeon_id */ 2:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 revise_level */ 3:
                    message.reviseLevel = reader.uint32();
                    break;
                case /* uint32 scene_level */ 15:
                    message.sceneLevel = reader.uint32();
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
        /* uint32 dungeon_id = 2; */
        if (message.dungeonId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* uint32 revise_level = 3; */
        if (message.reviseLevel !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.reviseLevel);
        /* uint32 scene_level = 15; */
        if (message.sceneLevel !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.sceneLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonReviseLevelNotify
 */
exports.DungeonReviseLevelNotify = new DungeonReviseLevelNotify$Type();
