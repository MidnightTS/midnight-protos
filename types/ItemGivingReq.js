"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemGivingReq = exports.ItemGivingReq_ItemGivingType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
/**
 * @generated from protobuf enum ItemGivingReq.ItemGivingType
 */
var ItemGivingReq_ItemGivingType;
(function (ItemGivingReq_ItemGivingType) {
    /**
     * @generated from protobuf enum value: ITEM_GIVING_TYPE_QUEST = 0;
     */
    ItemGivingReq_ItemGivingType[ItemGivingReq_ItemGivingType["QUEST"] = 0] = "QUEST";
    /**
     * @generated from protobuf enum value: ITEM_GIVING_TYPE_GADGET = 1;
     */
    ItemGivingReq_ItemGivingType[ItemGivingReq_ItemGivingType["GADGET"] = 1] = "GADGET";
})(ItemGivingReq_ItemGivingType = exports.ItemGivingReq_ItemGivingType || (exports.ItemGivingReq_ItemGivingType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ItemGivingReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ItemGivingReq", [
            { no: 6, name: "giving_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "item_giving_type", kind: "enum", T: () => ["ItemGivingReq.ItemGivingType", ItemGivingReq_ItemGivingType, "ITEM_GIVING_TYPE_"] },
            { no: 12, name: "item_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 11, name: "item_guid_count_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { givingId: 0, itemGivingType: 0, itemParamList: [], itemGuidCountMap: {} };
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
                case /* uint32 giving_id */ 6:
                    message.givingId = reader.uint32();
                    break;
                case /* ItemGivingReq.ItemGivingType item_giving_type */ 8:
                    message.itemGivingType = reader.int32();
                    break;
                case /* repeated ItemParam item_param_list */ 12:
                    message.itemParamList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<uint64, uint32> item_guid_count_map */ 11:
                    this.binaryReadMap11(message.itemGuidCountMap, reader, options);
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
    binaryReadMap11(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ItemGivingReq.item_guid_count_map");
            }
        }
        map[key ?? "0"] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 giving_id = 6; */
        if (message.givingId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.givingId);
        /* ItemGivingReq.ItemGivingType item_giving_type = 8; */
        if (message.itemGivingType !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.itemGivingType);
        /* repeated ItemParam item_param_list = 12; */
        for (let i = 0; i < message.itemParamList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint64, uint32> item_guid_count_map = 11; */
        for (let k of Object.keys(message.itemGuidCountMap))
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint64(k).tag(2, runtime_1.WireType.Varint).uint32(message.itemGuidCountMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ItemGivingReq
 */
exports.ItemGivingReq = new ItemGivingReq$Type();
