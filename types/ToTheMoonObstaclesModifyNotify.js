"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToTheMoonObstaclesModifyNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ToTheMoonObstacleInfo_1 = require("./ToTheMoonObstacleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonObstaclesModifyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ToTheMoonObstaclesModifyNotify", [
            { no: 3, name: "add_obstacles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ToTheMoonObstacleInfo_1.ToTheMoonObstacleInfo },
            { no: 7, name: "use_edge", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "remove_obstacle_ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { addObstacles: [], useEdge: false, sceneId: 0, removeObstacleIds: [] };
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
                case /* repeated ToTheMoonObstacleInfo add_obstacles */ 3:
                    message.addObstacles.push(ToTheMoonObstacleInfo_1.ToTheMoonObstacleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool use_edge */ 7:
                    message.useEdge = reader.bool();
                    break;
                case /* uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated int32 remove_obstacle_ids */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.removeObstacleIds.push(reader.int32());
                    else
                        message.removeObstacleIds.push(reader.int32());
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
        /* repeated ToTheMoonObstacleInfo add_obstacles = 3; */
        for (let i = 0; i < message.addObstacles.length; i++)
            ToTheMoonObstacleInfo_1.ToTheMoonObstacleInfo.internalBinaryWrite(message.addObstacles[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* bool use_edge = 7; */
        if (message.useEdge !== false)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.useEdge);
        /* uint32 scene_id = 4; */
        if (message.sceneId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* repeated int32 remove_obstacle_ids = 5; */
        if (message.removeObstacleIds.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.removeObstacleIds.length; i++)
                writer.int32(message.removeObstacleIds[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ToTheMoonObstaclesModifyNotify
 */
exports.ToTheMoonObstaclesModifyNotify = new ToTheMoonObstaclesModifyNotify$Type();
