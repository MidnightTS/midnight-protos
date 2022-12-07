"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkTargetInvestigationMonsterNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MarkTargetInvestigationMonsterNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("MarkTargetInvestigationMonsterNotify", [
            { no: 10, name: "monster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "investigation_monster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { monsterId: 0, sceneId: 0, groupId: 0, investigationMonsterId: 0 };
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
                case /* uint32 monster_id */ 10:
                    message.monsterId = reader.uint32();
                    break;
                case /* uint32 scene_id */ 7:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 group_id */ 15:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 investigation_monster_id */ 3:
                    message.investigationMonsterId = reader.uint32();
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
        /* uint32 monster_id = 10; */
        if (message.monsterId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.monsterId);
        /* uint32 scene_id = 7; */
        if (message.sceneId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* uint32 group_id = 15; */
        if (message.groupId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.groupId);
        /* uint32 investigation_monster_id = 3; */
        if (message.investigationMonsterId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.investigationMonsterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MarkTargetInvestigationMonsterNotify
 */
exports.MarkTargetInvestigationMonsterNotify = new MarkTargetInvestigationMonsterNotify$Type();
