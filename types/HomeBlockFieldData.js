"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBlockFieldData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const HomeBlockSubFieldData_1 = require("./HomeBlockSubFieldData");
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlockFieldData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeBlockFieldData", [
            { no: 4, name: "sub_field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeBlockSubFieldData_1.HomeBlockSubFieldData },
            { no: 15, name: "guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 12, name: "furniture_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "rot", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { subFieldList: [], guid: 0, furnitureId: 0 };
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
                case /* repeated HomeBlockSubFieldData sub_field_list */ 4:
                    message.subFieldList.push(HomeBlockSubFieldData_1.HomeBlockSubFieldData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 guid */ 15:
                    message.guid = reader.uint32();
                    break;
                case /* Vector pos */ 8:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 furniture_id */ 12:
                    message.furnitureId = reader.uint32();
                    break;
                case /* Vector rot */ 13:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
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
        /* repeated HomeBlockSubFieldData sub_field_list = 4; */
        for (let i = 0; i < message.subFieldList.length; i++)
            HomeBlockSubFieldData_1.HomeBlockSubFieldData.internalBinaryWrite(message.subFieldList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 guid = 15; */
        if (message.guid !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.guid);
        /* Vector pos = 8; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 furniture_id = 12; */
        if (message.furnitureId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.furnitureId);
        /* Vector rot = 13; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeBlockFieldData
 */
exports.HomeBlockFieldData = new HomeBlockFieldData$Type();
