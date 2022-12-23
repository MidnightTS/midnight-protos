"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToTheMoonQueryPathReq = exports.ToTheMoonQueryPathReq_FilterType = exports.ToTheMoonQueryPathReq_AStarMethod = exports.ToTheMoonQueryPathReq_OptionType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
/**
 * @generated from protobuf enum ToTheMoonQueryPathReq.OptionType
 */
var ToTheMoonQueryPathReq_OptionType;
(function (ToTheMoonQueryPathReq_OptionType) {
    /**
     * @generated from protobuf enum value: OPTION_TYPE_NONE = 0;
     */
    ToTheMoonQueryPathReq_OptionType[ToTheMoonQueryPathReq_OptionType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: OPTION_TYPE_NORMAL = 1;
     */
    ToTheMoonQueryPathReq_OptionType[ToTheMoonQueryPathReq_OptionType["NORMAL"] = 1] = "NORMAL";
})(ToTheMoonQueryPathReq_OptionType = exports.ToTheMoonQueryPathReq_OptionType || (exports.ToTheMoonQueryPathReq_OptionType = {}));
/**
 * @generated from protobuf enum ToTheMoonQueryPathReq.AStarMethod
 */
var ToTheMoonQueryPathReq_AStarMethod;
(function (ToTheMoonQueryPathReq_AStarMethod) {
    /**
     * @generated from protobuf enum value: A_STAR_METHOD_CLASSIC = 0;
     */
    ToTheMoonQueryPathReq_AStarMethod[ToTheMoonQueryPathReq_AStarMethod["CLASSIC"] = 0] = "CLASSIC";
    /**
     * @generated from protobuf enum value: A_STAR_METHOD_TENDENCY = 1;
     */
    ToTheMoonQueryPathReq_AStarMethod[ToTheMoonQueryPathReq_AStarMethod["TENDENCY"] = 1] = "TENDENCY";
    /**
     * @generated from protobuf enum value: A_STAR_METHOD_ADAPTIVE = 2;
     */
    ToTheMoonQueryPathReq_AStarMethod[ToTheMoonQueryPathReq_AStarMethod["ADAPTIVE"] = 2] = "ADAPTIVE";
    /**
     * @generated from protobuf enum value: A_STAR_METHOD_INFLECTION = 3;
     */
    ToTheMoonQueryPathReq_AStarMethod[ToTheMoonQueryPathReq_AStarMethod["INFLECTION"] = 3] = "INFLECTION";
})(ToTheMoonQueryPathReq_AStarMethod = exports.ToTheMoonQueryPathReq_AStarMethod || (exports.ToTheMoonQueryPathReq_AStarMethod = {}));
/**
 * @generated from protobuf enum ToTheMoonQueryPathReq.FilterType
 */
var ToTheMoonQueryPathReq_FilterType;
(function (ToTheMoonQueryPathReq_FilterType) {
    /**
     * @generated from protobuf enum value: FILTER_TYPE_ALL = 0;
     */
    ToTheMoonQueryPathReq_FilterType[ToTheMoonQueryPathReq_FilterType["ALL"] = 0] = "ALL";
    /**
     * @generated from protobuf enum value: FILTER_TYPE_AIR = 1;
     */
    ToTheMoonQueryPathReq_FilterType[ToTheMoonQueryPathReq_FilterType["AIR"] = 1] = "AIR";
    /**
     * @generated from protobuf enum value: FILTER_TYPE_WATER = 2;
     */
    ToTheMoonQueryPathReq_FilterType[ToTheMoonQueryPathReq_FilterType["WATER"] = 2] = "WATER";
})(ToTheMoonQueryPathReq_FilterType = exports.ToTheMoonQueryPathReq_FilterType || (exports.ToTheMoonQueryPathReq_FilterType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonQueryPathReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ToTheMoonQueryPathReq", [
            { no: 5, name: "query_type", kind: "enum", T: () => ["ToTheMoonQueryPathReq.OptionType", ToTheMoonQueryPathReq_OptionType, "OPTION_TYPE_"] },
            { no: 8, name: "Unk3300_BBLMBILIOGP", kind: "scalar", jsonName: "Unk3300BBLMBILIOGP", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "filter_type", kind: "enum", T: () => ["ToTheMoonQueryPathReq.FilterType", ToTheMoonQueryPathReq_FilterType, "FILTER_TYPE_"] },
            { no: 2, name: "query_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "astar_method", kind: "enum", T: () => ["ToTheMoonQueryPathReq.AStarMethod", ToTheMoonQueryPathReq_AStarMethod, "A_STAR_METHOD_"] },
            { no: 11, name: "source_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 3, name: "destination_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 7, name: "fuzzy_range", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "Unk3300_OFGONAMNIJG", kind: "scalar", jsonName: "Unk3300OFGONAMNIJG", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { queryType: 0, unk3300BBLMBILIOGP: false, filterType: 0, queryId: 0, astarMethod: 0, fuzzyRange: 0, unk3300OFGONAMNIJG: false, sceneId: 0 };
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
                case /* ToTheMoonQueryPathReq.OptionType query_type */ 5:
                    message.queryType = reader.int32();
                    break;
                case /* bool Unk3300_BBLMBILIOGP = 8 [json_name = "Unk3300BBLMBILIOGP"];*/ 8:
                    message.unk3300BBLMBILIOGP = reader.bool();
                    break;
                case /* ToTheMoonQueryPathReq.FilterType filter_type */ 13:
                    message.filterType = reader.int32();
                    break;
                case /* int32 query_id */ 2:
                    message.queryId = reader.int32();
                    break;
                case /* ToTheMoonQueryPathReq.AStarMethod astar_method */ 12:
                    message.astarMethod = reader.int32();
                    break;
                case /* Vector source_pos */ 11:
                    message.sourcePos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.sourcePos);
                    break;
                case /* Vector destination_pos */ 3:
                    message.destinationPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.destinationPos);
                    break;
                case /* int32 fuzzy_range */ 7:
                    message.fuzzyRange = reader.int32();
                    break;
                case /* bool Unk3300_OFGONAMNIJG = 6 [json_name = "Unk3300OFGONAMNIJG"];*/ 6:
                    message.unk3300OFGONAMNIJG = reader.bool();
                    break;
                case /* uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
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
        /* ToTheMoonQueryPathReq.OptionType query_type = 5; */
        if (message.queryType !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.queryType);
        /* bool Unk3300_BBLMBILIOGP = 8 [json_name = "Unk3300BBLMBILIOGP"]; */
        if (message.unk3300BBLMBILIOGP !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.unk3300BBLMBILIOGP);
        /* ToTheMoonQueryPathReq.FilterType filter_type = 13; */
        if (message.filterType !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.filterType);
        /* int32 query_id = 2; */
        if (message.queryId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.queryId);
        /* ToTheMoonQueryPathReq.AStarMethod astar_method = 12; */
        if (message.astarMethod !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.astarMethod);
        /* Vector source_pos = 11; */
        if (message.sourcePos)
            Vector_1.Vector.internalBinaryWrite(message.sourcePos, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector destination_pos = 3; */
        if (message.destinationPos)
            Vector_1.Vector.internalBinaryWrite(message.destinationPos, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 fuzzy_range = 7; */
        if (message.fuzzyRange !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.fuzzyRange);
        /* bool Unk3300_OFGONAMNIJG = 6 [json_name = "Unk3300OFGONAMNIJG"]; */
        if (message.unk3300OFGONAMNIJG !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.unk3300OFGONAMNIJG);
        /* uint32 scene_id = 4; */
        if (message.sceneId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ToTheMoonQueryPathReq
 */
exports.ToTheMoonQueryPathReq = new ToTheMoonQueryPathReq$Type();
