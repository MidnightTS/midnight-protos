"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathfindingEnterSceneReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ObstacleInfo_1 = require("./ObstacleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PathfindingEnterSceneReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PathfindingEnterSceneReq", [
            { no: 10, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_MGGFOILELKH", kind: "scalar", jsonName: "Unk3300MGGFOILELKH", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_JHLKDOHPIFB", kind: "scalar", jsonName: "Unk3300JHLKDOHPIFB", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "activity_id", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_editor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "obstacles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ObstacleInfo_1.ObstacleInfo }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, unk3300MGGFOILELKH: 0, unk3300JHLKDOHPIFB: 0, activityId: [], version: 0, isEditor: false, obstacles: [] };
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
                case /* uint32 scene_id */ 10:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 Unk3300_MGGFOILELKH = 12 [json_name = "Unk3300MGGFOILELKH"];*/ 12:
                    message.unk3300MGGFOILELKH = reader.uint32();
                    break;
                case /* uint32 Unk3300_JHLKDOHPIFB = 2 [json_name = "Unk3300JHLKDOHPIFB"];*/ 2:
                    message.unk3300JHLKDOHPIFB = reader.uint32();
                    break;
                case /* repeated uint32 activity_id */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.activityId.push(reader.uint32());
                    else
                        message.activityId.push(reader.uint32());
                    break;
                case /* uint32 version */ 11:
                    message.version = reader.uint32();
                    break;
                case /* bool is_editor */ 8:
                    message.isEditor = reader.bool();
                    break;
                case /* repeated ObstacleInfo obstacles */ 5:
                    message.obstacles.push(ObstacleInfo_1.ObstacleInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 scene_id = 10; */
        if (message.sceneId !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* uint32 Unk3300_MGGFOILELKH = 12 [json_name = "Unk3300MGGFOILELKH"]; */
        if (message.unk3300MGGFOILELKH !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.unk3300MGGFOILELKH);
        /* uint32 Unk3300_JHLKDOHPIFB = 2 [json_name = "Unk3300JHLKDOHPIFB"]; */
        if (message.unk3300JHLKDOHPIFB !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.unk3300JHLKDOHPIFB);
        /* repeated uint32 activity_id = 13; */
        if (message.activityId.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.activityId.length; i++)
                writer.uint32(message.activityId[i]);
            writer.join();
        }
        /* uint32 version = 11; */
        if (message.version !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.version);
        /* bool is_editor = 8; */
        if (message.isEditor !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isEditor);
        /* repeated ObstacleInfo obstacles = 5; */
        for (let i = 0; i < message.obstacles.length; i++)
            ObstacleInfo_1.ObstacleInfo.internalBinaryWrite(message.obstacles[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PathfindingEnterSceneReq
 */
exports.PathfindingEnterSceneReq = new PathfindingEnterSceneReq$Type();
