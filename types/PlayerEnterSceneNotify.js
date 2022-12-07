"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerEnterSceneNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EnterType_1 = require("./EnterType");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerEnterSceneNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerEnterSceneNotify", [
            { no: 1224, name: "Unk3300_LIDGFMDDOOM", kind: "scalar", jsonName: "Unk3300LIDGFMDDOOM", T: 13 /*ScalarType.UINT32*/ },
            { no: 32, name: "Unk3300_LFFBNEBMAAG", kind: "scalar", jsonName: "Unk3300LFFBNEBMAAG", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "world_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 3, name: "Unk3300_OKMNOFOHKOB", kind: "scalar", jsonName: "Unk3300OKMNOFOHKOB", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "Unk3300_LLHABHMLNAH", kind: "scalar", jsonName: "Unk3300LLHABHMLNAH", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "enter_scene_token", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "type", kind: "enum", T: () => ["EnterType", EnterType_1.EnterType, "ENTER_TYPE_"] },
            { no: 5, name: "scene_tag_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "scene_begin_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 287, name: "Unk3300_OOLKIEKNKKN", kind: "scalar", jsonName: "Unk3300OOLKIEKNKKN", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "prev_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 370, name: "scene_transaction", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { unk3300LIDGFMDDOOM: 0, unk3300LFFBNEBMAAG: false, worldLevel: 0, unk3300OKMNOFOHKOB: false, unk3300LLHABHMLNAH: 0, enterSceneToken: 0, dungeonId: 0, sceneId: 0, type: 0, sceneTagIdList: [], sceneBeginTime: 0n, unk3300OOLKIEKNKKN: 0, targetUid: 0, sceneTransaction: "" };
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
                case /* uint32 Unk3300_LIDGFMDDOOM = 1224 [json_name = "Unk3300LIDGFMDDOOM"];*/ 1224:
                    message.unk3300LIDGFMDDOOM = reader.uint32();
                    break;
                case /* bool Unk3300_LFFBNEBMAAG = 32 [json_name = "Unk3300LFFBNEBMAAG"];*/ 32:
                    message.unk3300LFFBNEBMAAG = reader.bool();
                    break;
                case /* uint32 world_level */ 4:
                    message.worldLevel = reader.uint32();
                    break;
                case /* Vector pos */ 1:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* bool Unk3300_OKMNOFOHKOB = 3 [json_name = "Unk3300OKMNOFOHKOB"];*/ 3:
                    message.unk3300OKMNOFOHKOB = reader.bool();
                    break;
                case /* uint32 Unk3300_LLHABHMLNAH = 13 [json_name = "Unk3300LLHABHMLNAH"];*/ 13:
                    message.unk3300LLHABHMLNAH = reader.uint32();
                    break;
                case /* uint32 enter_scene_token */ 6:
                    message.enterSceneToken = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 2:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 scene_id */ 11:
                    message.sceneId = reader.uint32();
                    break;
                case /* EnterType type */ 12:
                    message.type = reader.int32();
                    break;
                case /* repeated uint32 scene_tag_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sceneTagIdList.push(reader.uint32());
                    else
                        message.sceneTagIdList.push(reader.uint32());
                    break;
                case /* uint64 scene_begin_time */ 9:
                    message.sceneBeginTime = reader.uint64().toBigInt();
                    break;
                case /* uint32 Unk3300_OOLKIEKNKKN = 287 [json_name = "Unk3300OOLKIEKNKKN"];*/ 287:
                    message.unk3300OOLKIEKNKKN = reader.uint32();
                    break;
                case /* uint32 target_uid */ 8:
                    message.targetUid = reader.uint32();
                    break;
                case /* Vector prev_pos */ 10:
                    message.prevPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.prevPos);
                    break;
                case /* string scene_transaction */ 370:
                    message.sceneTransaction = reader.string();
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
        /* uint32 Unk3300_LIDGFMDDOOM = 1224 [json_name = "Unk3300LIDGFMDDOOM"]; */
        if (message.unk3300LIDGFMDDOOM !== 0)
            writer.tag(1224, runtime_2.WireType.Varint).uint32(message.unk3300LIDGFMDDOOM);
        /* bool Unk3300_LFFBNEBMAAG = 32 [json_name = "Unk3300LFFBNEBMAAG"]; */
        if (message.unk3300LFFBNEBMAAG !== false)
            writer.tag(32, runtime_2.WireType.Varint).bool(message.unk3300LFFBNEBMAAG);
        /* uint32 world_level = 4; */
        if (message.worldLevel !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.worldLevel);
        /* Vector pos = 1; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_OKMNOFOHKOB = 3 [json_name = "Unk3300OKMNOFOHKOB"]; */
        if (message.unk3300OKMNOFOHKOB !== false)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.unk3300OKMNOFOHKOB);
        /* uint32 Unk3300_LLHABHMLNAH = 13 [json_name = "Unk3300LLHABHMLNAH"]; */
        if (message.unk3300LLHABHMLNAH !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.unk3300LLHABHMLNAH);
        /* uint32 enter_scene_token = 6; */
        if (message.enterSceneToken !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        /* uint32 dungeon_id = 2; */
        if (message.dungeonId !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* uint32 scene_id = 11; */
        if (message.sceneId !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* EnterType type = 12; */
        if (message.type !== 0)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.type);
        /* repeated uint32 scene_tag_id_list = 5; */
        if (message.sceneTagIdList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sceneTagIdList.length; i++)
                writer.uint32(message.sceneTagIdList[i]);
            writer.join();
        }
        /* uint64 scene_begin_time = 9; */
        if (message.sceneBeginTime !== 0n)
            writer.tag(9, runtime_2.WireType.Varint).uint64(message.sceneBeginTime);
        /* uint32 Unk3300_OOLKIEKNKKN = 287 [json_name = "Unk3300OOLKIEKNKKN"]; */
        if (message.unk3300OOLKIEKNKKN !== 0)
            writer.tag(287, runtime_2.WireType.Varint).uint32(message.unk3300OOLKIEKNKKN);
        /* uint32 target_uid = 8; */
        if (message.targetUid !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.targetUid);
        /* Vector prev_pos = 10; */
        if (message.prevPos)
            Vector_1.Vector.internalBinaryWrite(message.prevPos, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* string scene_transaction = 370; */
        if (message.sceneTransaction !== "")
            writer.tag(370, runtime_2.WireType.LengthDelimited).string(message.sceneTransaction);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerEnterSceneNotify
 */
exports.PlayerEnterSceneNotify = new PlayerEnterSceneNotify$Type();
