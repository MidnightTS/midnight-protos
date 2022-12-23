"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeMarkPointFurnitureData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeMarkPointSuiteData_1 = require("./HomeMarkPointSuiteData");
const HomeMarkPointNPCData_1 = require("./HomeMarkPointNPCData");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class HomeMarkPointFurnitureData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeMarkPointFurnitureData", [
            { no: 1, name: "guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "furniture_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "furniture_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 6, name: "npc_data", kind: "message", oneof: "extra", T: () => HomeMarkPointNPCData_1.HomeMarkPointNPCData },
            { no: 7, name: "suite_data", kind: "message", oneof: "extra", T: () => HomeMarkPointSuiteData_1.HomeMarkPointSuiteData }
        ]);
    }
    create(value) {
        const message = { guid: 0, furnitureId: 0, furnitureType: 0, extra: { oneofKind: undefined } };
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
                case /* uint32 guid */ 1:
                    message.guid = reader.uint32();
                    break;
                case /* uint32 furniture_id */ 2:
                    message.furnitureId = reader.uint32();
                    break;
                case /* uint32 furniture_type */ 3:
                    message.furnitureType = reader.uint32();
                    break;
                case /* Vector pos */ 4:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* HomeMarkPointNPCData npc_data */ 6:
                    message.extra = {
                        oneofKind: "npcData",
                        npcData: HomeMarkPointNPCData_1.HomeMarkPointNPCData.internalBinaryRead(reader, reader.uint32(), options, message.extra.npcData)
                    };
                    break;
                case /* HomeMarkPointSuiteData suite_data */ 7:
                    message.extra = {
                        oneofKind: "suiteData",
                        suiteData: HomeMarkPointSuiteData_1.HomeMarkPointSuiteData.internalBinaryRead(reader, reader.uint32(), options, message.extra.suiteData)
                    };
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
        /* uint32 guid = 1; */
        if (message.guid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.guid);
        /* uint32 furniture_id = 2; */
        if (message.furnitureId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.furnitureId);
        /* uint32 furniture_type = 3; */
        if (message.furnitureType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.furnitureType);
        /* Vector pos = 4; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* HomeMarkPointNPCData npc_data = 6; */
        if (message.extra.oneofKind === "npcData")
            HomeMarkPointNPCData_1.HomeMarkPointNPCData.internalBinaryWrite(message.extra.npcData, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* HomeMarkPointSuiteData suite_data = 7; */
        if (message.extra.oneofKind === "suiteData")
            HomeMarkPointSuiteData_1.HomeMarkPointSuiteData.internalBinaryWrite(message.extra.suiteData, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeMarkPointFurnitureData
 */
exports.HomeMarkPointFurnitureData = new HomeMarkPointFurnitureData$Type();
