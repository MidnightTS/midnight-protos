"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCookRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
const CookRecipeData_1 = require("./CookRecipeData");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCookRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerCookRsp", [
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "recipe_data", kind: "message", T: () => CookRecipeData_1.CookRecipeData },
            { no: 5, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 1, name: "qte_quality", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "extra_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 11, name: "cook_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, itemList: [], qteQuality: 0, extraItemList: [], cookCount: 0 };
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
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* CookRecipeData recipe_data */ 12:
                    message.recipeData = CookRecipeData_1.CookRecipeData.internalBinaryRead(reader, reader.uint32(), options, message.recipeData);
                    break;
                case /* repeated ItemParam item_list */ 5:
                    message.itemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 qte_quality */ 1:
                    message.qteQuality = reader.uint32();
                    break;
                case /* repeated ItemParam extra_item_list */ 3:
                    message.extraItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 cook_count */ 11:
                    message.cookCount = reader.uint32();
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
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* CookRecipeData recipe_data = 12; */
        if (message.recipeData)
            CookRecipeData_1.CookRecipeData.internalBinaryWrite(message.recipeData, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam item_list = 5; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 qte_quality = 1; */
        if (message.qteQuality !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.qteQuality);
        /* repeated ItemParam extra_item_list = 3; */
        for (let i = 0; i < message.extraItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.extraItemList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 cook_count = 11; */
        if (message.cookCount !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.cookCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerCookRsp
 */
exports.PlayerCookRsp = new PlayerCookRsp$Type();
