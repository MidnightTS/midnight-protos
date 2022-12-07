"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToTheMoonAddObstacleReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ToTheMoonObstacleInfo_1 = require("./ToTheMoonObstacleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonAddObstacleReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ToTheMoonAddObstacleReq", [
            { no: 7, name: "use_edge", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "obstacle", kind: "message", T: () => ToTheMoonObstacleInfo_1.ToTheMoonObstacleInfo },
            { no: 13, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "query_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { useEdge: false, sceneId: 0, queryId: 0 };
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
                case /* bool use_edge */ 7:
                    message.useEdge = reader.bool();
                    break;
                case /* ToTheMoonObstacleInfo obstacle */ 8:
                    message.obstacle = ToTheMoonObstacleInfo_1.ToTheMoonObstacleInfo.internalBinaryRead(reader, reader.uint32(), options, message.obstacle);
                    break;
                case /* uint32 scene_id */ 13:
                    message.sceneId = reader.uint32();
                    break;
                case /* int32 query_id */ 5:
                    message.queryId = reader.int32();
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
        /* bool use_edge = 7; */
        if (message.useEdge !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.useEdge);
        /* ToTheMoonObstacleInfo obstacle = 8; */
        if (message.obstacle)
            ToTheMoonObstacleInfo_1.ToTheMoonObstacleInfo.internalBinaryWrite(message.obstacle, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 scene_id = 13; */
        if (message.sceneId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* int32 query_id = 5; */
        if (message.queryId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.queryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ToTheMoonAddObstacleReq
 */
exports.ToTheMoonAddObstacleReq = new ToTheMoonAddObstacleReq$Type();
