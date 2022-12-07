"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GMObstacleInfo = exports.GMObstacleInfo_ShapeType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector3Int_1 = require("./Vector3Int");
const Vector_1 = require("./Vector");
const MathQuaternion_1 = require("./MathQuaternion");
/**
 * @generated from protobuf enum GMObstacleInfo.ShapeType
 */
var GMObstacleInfo_ShapeType;
(function (GMObstacleInfo_ShapeType) {
    /**
     * @generated from protobuf enum value: SHAPE_TYPE_OBSTACLE_SHAPE_CAPSULE = 0;
     */
    GMObstacleInfo_ShapeType[GMObstacleInfo_ShapeType["OBSTACLE_SHAPE_CAPSULE"] = 0] = "OBSTACLE_SHAPE_CAPSULE";
    /**
     * @generated from protobuf enum value: SHAPE_TYPE_OBSTACLE_SHAPE_BOX = 1;
     */
    GMObstacleInfo_ShapeType[GMObstacleInfo_ShapeType["OBSTACLE_SHAPE_BOX"] = 1] = "OBSTACLE_SHAPE_BOX";
})(GMObstacleInfo_ShapeType = exports.GMObstacleInfo_ShapeType || (exports.GMObstacleInfo_ShapeType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GMObstacleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GMObstacleInfo", [
            { no: 2, name: "shape", kind: "enum", T: () => ["GMObstacleInfo.ShapeType", GMObstacleInfo_ShapeType, "SHAPE_TYPE_"] },
            { no: 8, name: "rotation", kind: "message", T: () => MathQuaternion_1.MathQuaternion },
            { no: 15, name: "center", kind: "message", T: () => Vector_1.Vector },
            { no: 1, name: "timestamp", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "obstacle_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "extents", kind: "message", T: () => Vector3Int_1.Vector3Int }
        ]);
    }
    create(value) {
        const message = { shape: 0, timestamp: 0n, obstacleId: 0 };
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
                case /* GMObstacleInfo.ShapeType shape */ 2:
                    message.shape = reader.int32();
                    break;
                case /* MathQuaternion rotation */ 8:
                    message.rotation = MathQuaternion_1.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* Vector center */ 15:
                    message.center = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* int64 timestamp */ 1:
                    message.timestamp = reader.int64().toBigInt();
                    break;
                case /* int32 obstacle_id */ 13:
                    message.obstacleId = reader.int32();
                    break;
                case /* Vector3Int extents */ 9:
                    message.extents = Vector3Int_1.Vector3Int.internalBinaryRead(reader, reader.uint32(), options, message.extents);
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
        /* GMObstacleInfo.ShapeType shape = 2; */
        if (message.shape !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.shape);
        /* MathQuaternion rotation = 8; */
        if (message.rotation)
            MathQuaternion_1.MathQuaternion.internalBinaryWrite(message.rotation, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector center = 15; */
        if (message.center)
            Vector_1.Vector.internalBinaryWrite(message.center, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int64 timestamp = 1; */
        if (message.timestamp !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).int64(message.timestamp);
        /* int32 obstacle_id = 13; */
        if (message.obstacleId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.obstacleId);
        /* Vector3Int extents = 9; */
        if (message.extents)
            Vector3Int_1.Vector3Int.internalBinaryWrite(message.extents, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GMObstacleInfo
 */
exports.GMObstacleInfo = new GMObstacleInfo$Type();
