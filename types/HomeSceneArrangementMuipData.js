"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSceneArrangementMuipData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeBlockArrangementMuipData_1 = require("./HomeBlockArrangementMuipData");
// @generated message type with reflection information, may provide speed optimized methods
class HomeSceneArrangementMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSceneArrangementMuipData", [
            { no: 1, name: "module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_room", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "block_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeBlockArrangementMuipData_1.HomeBlockArrangementMuipData }
        ]);
    }
    create(value) {
        const message = { blockDataList: [] };
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
                case /* optional uint32 module_id */ 1:
                    message.moduleId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 2:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional bool is_room */ 3:
                    message.isRoom = reader.bool();
                    break;
                case /* repeated com.midnights.game.HomeBlockArrangementMuipData block_data_list */ 4:
                    message.blockDataList.push(HomeBlockArrangementMuipData_1.HomeBlockArrangementMuipData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 module_id = 1; */
        if (message.moduleId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.moduleId);
        /* optional uint32 scene_id = 2; */
        if (message.sceneId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional bool is_room = 3; */
        if (message.isRoom !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isRoom);
        /* repeated com.midnights.game.HomeBlockArrangementMuipData block_data_list = 4; */
        for (let i = 0; i < message.blockDataList.length; i++)
            HomeBlockArrangementMuipData_1.HomeBlockArrangementMuipData.internalBinaryWrite(message.blockDataList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSceneArrangementMuipData
 */
exports.HomeSceneArrangementMuipData = new HomeSceneArrangementMuipData$Type();
