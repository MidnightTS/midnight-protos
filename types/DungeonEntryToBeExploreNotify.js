"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonEntryToBeExploreNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEntryToBeExploreNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonEntryToBeExploreNotify", [
            { no: 6, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "dungeon_entry_scene_point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "dungeon_entry_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, dungeonEntryScenePointId: 0, dungeonEntryConfigId: 0 };
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
                case /* uint32 scene_id */ 6:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 dungeon_entry_scene_point_id */ 3:
                    message.dungeonEntryScenePointId = reader.uint32();
                    break;
                case /* uint32 dungeon_entry_config_id */ 2:
                    message.dungeonEntryConfigId = reader.uint32();
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
        /* uint32 scene_id = 6; */
        if (message.sceneId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* uint32 dungeon_entry_scene_point_id = 3; */
        if (message.dungeonEntryScenePointId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.dungeonEntryScenePointId);
        /* uint32 dungeon_entry_config_id = 2; */
        if (message.dungeonEntryConfigId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.dungeonEntryConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonEntryToBeExploreNotify
 */
exports.DungeonEntryToBeExploreNotify = new DungeonEntryToBeExploreNotify$Type();
