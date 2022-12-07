"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObstacleModifyNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ObstacleInfo_1 = require("./ObstacleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ObstacleModifyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ObstacleModifyNotify", [
            { no: 7, name: "remove_obstacle_ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "add_obstacles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ObstacleInfo_1.ObstacleInfo },
            { no: 12, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { removeObstacleIds: [], addObstacles: [], sceneId: 0 };
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
                case /* repeated int32 remove_obstacle_ids */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.removeObstacleIds.push(reader.int32());
                    else
                        message.removeObstacleIds.push(reader.int32());
                    break;
                case /* repeated ObstacleInfo add_obstacles */ 15:
                    message.addObstacles.push(ObstacleInfo_1.ObstacleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 scene_id */ 12:
                    message.sceneId = reader.uint32();
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
        /* repeated int32 remove_obstacle_ids = 7; */
        if (message.removeObstacleIds.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.removeObstacleIds.length; i++)
                writer.int32(message.removeObstacleIds[i]);
            writer.join();
        }
        /* repeated ObstacleInfo add_obstacles = 15; */
        for (let i = 0; i < message.addObstacles.length; i++)
            ObstacleInfo_1.ObstacleInfo.internalBinaryWrite(message.addObstacles[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 scene_id = 12; */
        if (message.sceneId !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ObstacleModifyNotify
 */
exports.ObstacleModifyNotify = new ObstacleModifyNotify$Type();
