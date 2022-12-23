"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePointUnlockNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ScenePointUnlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ScenePointUnlockNotify", [
            { no: 10, name: "hide_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "locked_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "unhide_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { hidePointList: [], lockedPointList: [], sceneId: 0, pointList: [], unhidePointList: [] };
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
                case /* repeated uint32 hide_point_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.hidePointList.push(reader.uint32());
                    else
                        message.hidePointList.push(reader.uint32());
                    break;
                case /* repeated uint32 locked_point_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lockedPointList.push(reader.uint32());
                    else
                        message.lockedPointList.push(reader.uint32());
                    break;
                case /* uint32 scene_id */ 11:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated uint32 point_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.pointList.push(reader.uint32());
                    else
                        message.pointList.push(reader.uint32());
                    break;
                case /* repeated uint32 unhide_point_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unhidePointList.push(reader.uint32());
                    else
                        message.unhidePointList.push(reader.uint32());
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
        /* repeated uint32 hide_point_list = 10; */
        if (message.hidePointList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.hidePointList.length; i++)
                writer.uint32(message.hidePointList[i]);
            writer.join();
        }
        /* repeated uint32 locked_point_list = 5; */
        if (message.lockedPointList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lockedPointList.length; i++)
                writer.uint32(message.lockedPointList[i]);
            writer.join();
        }
        /* uint32 scene_id = 11; */
        if (message.sceneId !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* repeated uint32 point_list = 6; */
        if (message.pointList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.pointList.length; i++)
                writer.uint32(message.pointList[i]);
            writer.join();
        }
        /* repeated uint32 unhide_point_list = 1; */
        if (message.unhidePointList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unhidePointList.length; i++)
                writer.uint32(message.unhidePointList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ScenePointUnlockNotify
 */
exports.ScenePointUnlockNotify = new ScenePointUnlockNotify$Type();
