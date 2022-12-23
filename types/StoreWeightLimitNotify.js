"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreWeightLimitNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const StoreType_1 = require("./StoreType");
// @generated message type with reflection information, may provide speed optimized methods
class StoreWeightLimitNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("StoreWeightLimitNotify", [
            { no: 14, name: "reliquary_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "furniture_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "material_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "weapon_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "weight_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "store_type", kind: "enum", T: () => ["StoreType", StoreType_1.StoreType, "STORE_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { reliquaryCountLimit: 0, furnitureCountLimit: 0, materialCountLimit: 0, weaponCountLimit: 0, weightLimit: 0, storeType: 0 };
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
                case /* uint32 reliquary_count_limit */ 14:
                    message.reliquaryCountLimit = reader.uint32();
                    break;
                case /* uint32 furniture_count_limit */ 10:
                    message.furnitureCountLimit = reader.uint32();
                    break;
                case /* uint32 material_count_limit */ 5:
                    message.materialCountLimit = reader.uint32();
                    break;
                case /* uint32 weapon_count_limit */ 1:
                    message.weaponCountLimit = reader.uint32();
                    break;
                case /* uint32 weight_limit */ 8:
                    message.weightLimit = reader.uint32();
                    break;
                case /* StoreType store_type */ 9:
                    message.storeType = reader.int32();
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
        /* uint32 reliquary_count_limit = 14; */
        if (message.reliquaryCountLimit !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.reliquaryCountLimit);
        /* uint32 furniture_count_limit = 10; */
        if (message.furnitureCountLimit !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.furnitureCountLimit);
        /* uint32 material_count_limit = 5; */
        if (message.materialCountLimit !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.materialCountLimit);
        /* uint32 weapon_count_limit = 1; */
        if (message.weaponCountLimit !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.weaponCountLimit);
        /* uint32 weight_limit = 8; */
        if (message.weightLimit !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.weightLimit);
        /* StoreType store_type = 9; */
        if (message.storeType !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.storeType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StoreWeightLimitNotify
 */
exports.StoreWeightLimitNotify = new StoreWeightLimitNotify$Type();
