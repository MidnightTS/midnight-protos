"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeFurnitureCustomSuiteData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class HomeFurnitureCustomSuiteData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeFurnitureCustomSuiteData", [
            { no: 14, name: "included_furniture_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "spawn_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 12, name: "guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { includedFurnitureIndexList: [], guid: 0 };
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
                case /* repeated int32 included_furniture_index_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.includedFurnitureIndexList.push(reader.int32());
                    else
                        message.includedFurnitureIndexList.push(reader.int32());
                    break;
                case /* Vector spawn_pos */ 5:
                    message.spawnPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
                    break;
                case /* uint32 guid */ 12:
                    message.guid = reader.uint32();
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
        /* repeated int32 included_furniture_index_list = 14; */
        if (message.includedFurnitureIndexList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.includedFurnitureIndexList.length; i++)
                writer.int32(message.includedFurnitureIndexList[i]);
            writer.join();
        }
        /* Vector spawn_pos = 5; */
        if (message.spawnPos)
            Vector_1.Vector.internalBinaryWrite(message.spawnPos, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 guid = 12; */
        if (message.guid !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeFurnitureCustomSuiteData
 */
exports.HomeFurnitureCustomSuiteData = new HomeFurnitureCustomSuiteData$Type();
