"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeModuleComfortInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeModuleComfortInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeModuleComfortInfo", [
            { no: 5, name: "room_scene_comfort_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "world_scene_block_comfort_value_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "module_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { roomSceneComfortValue: 0, worldSceneBlockComfortValueList: [], moduleId: 0 };
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
                case /* uint32 room_scene_comfort_value */ 5:
                    message.roomSceneComfortValue = reader.uint32();
                    break;
                case /* repeated uint32 world_scene_block_comfort_value_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.worldSceneBlockComfortValueList.push(reader.uint32());
                    else
                        message.worldSceneBlockComfortValueList.push(reader.uint32());
                    break;
                case /* uint32 module_id */ 15:
                    message.moduleId = reader.uint32();
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
        /* uint32 room_scene_comfort_value = 5; */
        if (message.roomSceneComfortValue !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.roomSceneComfortValue);
        /* repeated uint32 world_scene_block_comfort_value_list = 10; */
        if (message.worldSceneBlockComfortValueList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.worldSceneBlockComfortValueList.length; i++)
                writer.uint32(message.worldSceneBlockComfortValueList[i]);
            writer.join();
        }
        /* uint32 module_id = 15; */
        if (message.moduleId !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.moduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeModuleComfortInfo
 */
exports.HomeModuleComfortInfo = new HomeModuleComfortInfo$Type();
