"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePlantFieldData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const HomePlantSubFieldData_1 = require("./HomePlantSubFieldData");
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantFieldData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomePlantFieldData", [
            { no: 15, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "field_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "sub_field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomePlantSubFieldData_1.HomePlantSubFieldData },
            { no: 1, name: "furniture_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "spawn_pos", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, fieldGuid: 0, subFieldList: [], furnitureId: 0 };
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
                case /* uint32 scene_id */ 15:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 field_guid */ 5:
                    message.fieldGuid = reader.uint32();
                    break;
                case /* repeated HomePlantSubFieldData sub_field_list */ 3:
                    message.subFieldList.push(HomePlantSubFieldData_1.HomePlantSubFieldData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 furniture_id */ 1:
                    message.furnitureId = reader.uint32();
                    break;
                case /* Vector spawn_pos */ 9:
                    message.spawnPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
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
        /* uint32 scene_id = 15; */
        if (message.sceneId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* uint32 field_guid = 5; */
        if (message.fieldGuid !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.fieldGuid);
        /* repeated HomePlantSubFieldData sub_field_list = 3; */
        for (let i = 0; i < message.subFieldList.length; i++)
            HomePlantSubFieldData_1.HomePlantSubFieldData.internalBinaryWrite(message.subFieldList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 furniture_id = 1; */
        if (message.furnitureId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.furnitureId);
        /* Vector spawn_pos = 9; */
        if (message.spawnPos)
            Vector_1.Vector.internalBinaryWrite(message.spawnPos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomePlantFieldData
 */
exports.HomePlantFieldData = new HomePlantFieldData$Type();
