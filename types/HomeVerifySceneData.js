"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeVerifySceneData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeVerifyBlockData_1 = require("./HomeVerifyBlockData");
// @generated message type with reflection information, may provide speed optimized methods
class HomeVerifySceneData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeVerifySceneData", [
            { no: 7, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "blocks", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeVerifyBlockData_1.HomeVerifyBlockData },
            { no: 2, name: "version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_room", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "module_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, blocks: [], version: 0, isRoom: 0, moduleId: 0 };
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
                case /* uint32 scene_id */ 7:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated HomeVerifyBlockData blocks */ 8:
                    message.blocks.push(HomeVerifyBlockData_1.HomeVerifyBlockData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 version */ 2:
                    message.version = reader.uint32();
                    break;
                case /* uint32 is_room */ 9:
                    message.isRoom = reader.uint32();
                    break;
                case /* uint32 module_id */ 12:
                    message.moduleId = reader.uint32();
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
        /* uint32 scene_id = 7; */
        if (message.sceneId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* repeated HomeVerifyBlockData blocks = 8; */
        for (let i = 0; i < message.blocks.length; i++)
            HomeVerifyBlockData_1.HomeVerifyBlockData.internalBinaryWrite(message.blocks[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 version = 2; */
        if (message.version !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.version);
        /* uint32 is_room = 9; */
        if (message.isRoom !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.isRoom);
        /* uint32 module_id = 12; */
        if (message.moduleId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.moduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeVerifySceneData
 */
exports.HomeVerifySceneData = new HomeVerifySceneData$Type();
