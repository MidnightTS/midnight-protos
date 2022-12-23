"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageMarketStoreOpInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class VintageMarketStoreOpInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageMarketStoreOpInfo", [
            { no: 11, name: "help_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "help_skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "store_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "add_attr_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "strategy_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { helpUid: 0, helpSkillId: 0, storeId: 0, addAttrList: [], strategyList: [] };
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
                case /* uint32 help_uid */ 11:
                    message.helpUid = reader.uint32();
                    break;
                case /* uint32 help_skill_id */ 10:
                    message.helpSkillId = reader.uint32();
                    break;
                case /* uint32 store_id */ 8:
                    message.storeId = reader.uint32();
                    break;
                case /* repeated uint32 add_attr_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.addAttrList.push(reader.uint32());
                    else
                        message.addAttrList.push(reader.uint32());
                    break;
                case /* repeated uint32 strategy_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.strategyList.push(reader.uint32());
                    else
                        message.strategyList.push(reader.uint32());
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
        /* uint32 help_uid = 11; */
        if (message.helpUid !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.helpUid);
        /* uint32 help_skill_id = 10; */
        if (message.helpSkillId !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.helpSkillId);
        /* uint32 store_id = 8; */
        if (message.storeId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.storeId);
        /* repeated uint32 add_attr_list = 12; */
        if (message.addAttrList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.addAttrList.length; i++)
                writer.uint32(message.addAttrList[i]);
            writer.join();
        }
        /* repeated uint32 strategy_list = 9; */
        if (message.strategyList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.strategyList.length; i++)
                writer.uint32(message.strategyList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageMarketStoreOpInfo
 */
exports.VintageMarketStoreOpInfo = new VintageMarketStoreOpInfo$Type();
